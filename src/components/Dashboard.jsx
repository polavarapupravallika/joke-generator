import React, { useState } from "react";
import "../App.css";

function Dashboard() {
  const [joke, setJoke] = useState({
    question: "",
    answer: ""
  });

  const jokes = [
  {
    question: "Why don’t scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    question: "Why did the computer go to the doctor?",
    answer: "Because it caught a virus!"
  },
  {
    question: "Why was the math book sad?",
    answer: "Because it had too many problems."
  },
  {
    question: "Why don’t programmers like nature?",
    answer: "Too many bugs."
  },
  {
    question: "What do you call fake spaghetti?",
    answer: "An impasta!"
  },
  {
    question: "Why did the student eat his homework?",
    answer: "Because the teacher said it was a piece of cake!"
  },
  {
    question: "Why did the laptop get cold?",
    answer: "Because it forgot to close its Windows!"
  },
  {
    question: "What do you call a bear with no teeth?",
    answer: "A gummy bear!"
  },
  {
    question: "Why can't your nose be 12 inches long?",
    answer: "Because then it would be a foot!"
  },
  {
    question: "Why did the Java developer wear glasses?",
    answer: "Because he couldn’t C#."
  }
];

 const generateJoke = () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  setJoke(jokes[randomIndex]);
};

  return (
    <div className="app-container">
      <h1 className="app-title">Joke Generator</h1>

      <div className="joke-question">{joke.question}</div>
      <div className="joke-answer">{joke.answer}</div>

      <button className="generate-btn" onClick={generateJoke}>
        Get Joke
      </button>
    </div>
  );
}

export default Dashboard;