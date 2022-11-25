const readline = require('readline-sync');
const questions = require('./questions');

let questionIndex = 0;
const response = { indexes: [] };

while (questionIndex >= 0) {
  const currentQuestion = questions[questionIndex];
  const options = `a) ${currentQuestion.options[0].text} |b) ${currentQuestion.options[1].text}`
  const resp = readline.question(currentQuestion.question + ` ${options}` + " \n");

  response.indexes.push(questionIndex);
  response[questionIndex] = resp;

  questionIndex = currentQuestion.options[0].nextQuestion;

  if (resp.toLocaleLowerCase() === currentQuestion.options[1].text.toLocaleLowerCase()) {
    questionIndex = currentQuestion.options[1].nextQuestion;
  }
  console.log(`Next question index:: ${questionIndex}`);
}

console.log("\n", response);
console.log("\n Quiz completed!");