import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5002/api/quizzes", { withCredentials: true })
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  }

  function retryQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  if (questions.length === 0) {
    return null; 
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-12">
        {!showScore ? (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="text-gray-700 mb-6">
              {questions[currentQuestion].question}
            </p>

            <button
              onClick={() => handleAnswer(1)}
              className="w-full bg-blue-600 text-white p-3 rounded mb-2 hover:bg-blue-700"
            >
              {questions[currentQuestion].option1}
            </button>
            <button
              onClick={() => handleAnswer(2)}
              className="w-full bg-blue-600 text-white p-3 rounded mb-2 hover:bg-blue-700"
            >
              {questions[currentQuestion].option2}
            </button>
            <button
              onClick={() => handleAnswer(3)}
              className="w-full bg-blue-600 text-white p-3 rounded mb-2 hover:bg-blue-700"
            >
              {questions[currentQuestion].option3}
            </button>
            <button
              onClick={() => handleAnswer(4)}
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
            >
              {questions[currentQuestion].option4}
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Quiz Complete!
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              You scored {score} out of {questions.length}
            </p>
            <button
              onClick={retryQuiz}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Retry Quiz
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;