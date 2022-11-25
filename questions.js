const questions = [
  {
    question: "What is your name?",
    options: [
      { text: "John", nextQuestion: 1 },
      { text: "Jane", nextQuestion: 3 },
    ]
  },
  {
    question: "What is your place of birth",
    options: [
      { text: "Toronto", nextQuestion: 2 },
      { text: "Calgari", nextQuestion: 3 },
    ]
  },
  {
    question: "What is your height",
    options: [
      { text: "7", nextQuestion: 4 },
      { text: "5", nextQuestion: 5 },
    ]
  },
  {
    question: "What is your eye color",
    options: [
      { text: "Violet", nextQuestion: 2 },
      { text: "Teloiv", nextQuestion: 4 },
    ]
  },
  {
    question: "What is your length",
    options: [
      { text: "13", nextQuestion: 5 },
      { text: "15", nextQuestion: 5 },
    ]
  },
  {
    question: "What is your hat color",
    options: [
      { text: "Prink", nextQuestion: 6 },
      { text: "Breen", nextQuestion: 6 },
    ]
  },

  {
    question: "What is your breath",
    options: [
      { text: "Gold", nextQuestion: -1 },
      { text: "Silver", nextQuestion: -1 },
    ]
  }
];

module.exports = questions;