import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "Thiết bị nào cần thiết cho kết nối Internet?",
    options: ["Modem", "Router", "Dây LAN", "USB"],
    answer: "Modem"
  },
  {
    question: "Ngôn ngữ nào chạy trong trình duyệt web?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "CSS là viết tắt của gì?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "HTML là viết tắt của gì?",
    options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Lasagna", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "API là viết tắt của gì?",
    options: ["Application Programming Interface", "Application Protocol Interface", "Apple Pie Inside", "Android Programming Interface"],
    answer: "Application Programming Interface"
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          Bạn đã trả lời đúng {score} trên {questions.length} câu hỏi
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Câu hỏi {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].question}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
          <button
            className='next-button'
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            disabled={currentQuestion >= questions.length - 1}
          >
            Tiếp theo
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
