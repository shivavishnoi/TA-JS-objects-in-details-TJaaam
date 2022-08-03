let quizMethods = {
  isAnswerCorrect: function (index) {
    return index == this.correctAnswerIndex
  },
  getCorrectAnswer: function () {
    return this.options[this.correctAnswerIndex]
  }
}


function quiz(title, options, correctAnswerIndex) {
  let question = Object.create(quizMethods)
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  return question
}

let question1 = quiz('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
console.log(question1.isAnswerCorrect(1))
console.log(question1.getCorrectAnswer())