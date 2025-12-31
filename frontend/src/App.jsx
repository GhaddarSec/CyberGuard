import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Quiz from "./pages/features/Quiz";
import Updates from "./pages/features/Updates";
import SecurityTips from "./pages/features/SecurityTips";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/quizzes" element={<Quiz />} />
        <Route path="/features/updates" element={<Updates />} />
        <Route path="/features/security-tips" element={<SecurityTips />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
