function quiz(title, options, correctAnswerIndex) {
  let question = {}
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (index) {
    return index == this.correctAnswerIndex
  }
  question.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex]
  }
  return question
}

let question1 = quiz('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);
console.log(question1.isAnswerCorrect(1))
console.log(question1.getCorrectAnswer())