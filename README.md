# 🛡️ CyberGuard
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

**CyberGuard** is a full-stack Cybersecurity Intelligence platform. It allows users to stay informed with security updates and test their knowledge via interactive quizzes. The application uses a robust "Gatekeeper" system where only authenticated users can access the intelligence data.

---

## 🚀 Key Features

- **JWT Auth:** Secure login using JSON Web Tokens and `HttpOnly` cookies.
- **Password Security:** Industry-standard password hashing using `bcrypt`.
- **Protected Routes:** Middleware-level protection for Quizzes and Updates.
- **CORS Config:** Configured for secure cross-origin communication with credentials.
- **Dynamic Database:** Real-time data fetching for all security content.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS, Axios, React Router.
- **Backend:** Node.js, Express.js.
- **Database:** MySQL (via XAMPP).
- **Security:** JSONWebToken, Cookie-Parser, Bcrypt.

---

## ⚙️ Database Schema (MySQL)

Run these commands in your **phpMyAdmin** SQL tab to set up your tables:

```sql
-- Users Table (Authentication)
CREATE TABLE users (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Quizzes Table (Intelligence Testing)
CREATE TABLE quizzes (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  question TEXT NOT NULL,
  option_a VARCHAR(255),
  option_b VARCHAR(255),
  option_c VARCHAR(255),
  correct_option CHAR(1),
  explanation TEXT
);

-- Updates Table (Security Feed)
CREATE TABLE updates (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Security Tips Table
CREATE TABLE security_tips (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(100)
);

-- Contact Messages Table
CREATE TABLE contact_messages (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT,
  sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);





🛠️ Setup Instructions
1. Backend Setup
Open the terminal in your server folder.

Run npm install.

Create a .env file and add your secrets:

Code snippet

PORT=5002
JWT_KEY=your_secret_key_here
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=cyber_guard
Start the server: npm start.

2. Frontend Setup
Open the terminal in your client folder.

Run npm install.

Start the Vite dev server: npm run dev.

The app will be running at http://localhost:5173.

🔒 Security Workflow
Token Issue: On login, the server sends a jwt cookie with httpOnly: true.

Credential Exchange: Frontend Axios calls must include { withCredentials: true }.

Middleware Guard: The verifyJWT middleware checks the cookie before allowing access to req.userId.

Data Protection: If the token is missing or invalid, the backend returns a 401 Unauthorized status.