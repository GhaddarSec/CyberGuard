import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { db } from '../config/db.js';
import { verifyJWT } from '../middleware/verifyJWT.js';

const router = express.Router();

router.get("/security-tips", verifyJWT, (req, res)=> {
    const sql ="select * from security_tips";
    db.query(sql, (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});

router.get("/quizzes", verifyJWT,(req, res)=> {
    const sql ="select * from quizzes";
    db.query(sql, (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});

router.get("/updates",verifyJWT, (req, res)=> {
    const sql ="select * from updates ORDER BY date DESC";
    db.query(sql, (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const q = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
    
    db.query(q, [name, email, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error..." });
        }
        return res.status(200).json({ message: "Message saved successfully!" });
    });
});

export default router;