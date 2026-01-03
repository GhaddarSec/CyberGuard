import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';


export const db = mysql.createPool({
  uri: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 0
});

