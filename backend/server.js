import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
const app =express();
app.use(cors());
app.use(express.json());

const PORT= 5002;

app.listen(PORT, ()=> {
    console.log(`Server Running on port: ${PORT}`);
});

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "cyber_guard"});

app.get("/api/security-tips", (req, res)=> {
    const sql ="select * from security_tips";
    db.query(sql, (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});


app.get("/api/quizzes", (req, res)=> {
    const sql ="select * from quizzes";
    db.query(sql, (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});



app.get("/api/updates", (req, res)=> {
    const sql ="select * from updates ORDER BY date DESC";
    db.query(sql, (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});


app.post('/api/contact', (req, res) => {
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