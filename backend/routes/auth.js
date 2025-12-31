import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import { db } from '../config/db.js';


const router = express.Router();



//signup api
router.post('/signup', (req, res) => {
    let { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json("Please fill all fields.");
    }

    username = validator.escape(username).trim();
    email = validator.normalizeEmail(email);

    if (!validator.isEmail(email)) {
        return res.status(400).json("Invalid email format!");
    }

    if (!validator.isLength(password, { min: 8, max: 20 })) {
        return res.status(400).json("Password must be 8-20 characters.");
    }

    const checkQuery = "SELECT email FROM users WHERE email = ?";
    db.query(checkQuery, [email], async (err, data) => {
        if (err) return res.status(500).json("Error. try again later...");
        if (data.length > 0) return res.status(400).json("user already exists ");

        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
            db.query(sql, [username, email, hashedPassword], (err, result) => {
                if (err) return res.status(500).json("Error. try again later...");
                return res.status(201).json("User created successfully .");
            });
        } catch (error) {
            return res.status(500).json("Error. try again later...");
        }
    });
});



//login api
router.post("/login", (req, res) => {
    let { email, password} = req.body;

     if ( !email || !password) {
        return res.status(400).json("Please fill all fields.");
    }
    const sql = "SELECT id, username, password FROM users WHERE email = ?";
    db.query(sql, [email], async (err, data) => {
        if(err) return res.status(401).json("Invalid email or password");

        if(data.length === 0) return res.status(401).json("Invalid email or password");

        try{
            const isMatching = await bcrypt.compare(password, data[0].password);
            
            if(!isMatching){
                return res.status(401).json("Invalid email or password");
            }
            else{
                const token = jwt.sign(
                    { id: data[0].id,
                      username: data[0].username  
                    }, 
                    process.env.JWT_KEY, { 
                    algorithm: 'HS256',
                    expiresIn: '1h'
                    }
                );

                return res.cookie("jwt", token, { httpOnly: true })
                    .status(200)
                    .json("Login Successful");
            }
        }
        catch (error) {
            return res.status(500).json("Error ....");
        }
    });
});


export default router;