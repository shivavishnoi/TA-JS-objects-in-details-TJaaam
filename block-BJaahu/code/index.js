// let questionMethods = {
//   isAnswerCorrect(index) {
//     return index == this.correctAnswerIndex
//   },
//   getCorrectAnswer() {
//     return this.options[this.correctAnswerIndex]
//   }
// }
// function Question(title, options, correctAnswerIndex) {
//   let obj = Object.create(questionMethods)
//   obj.title = title;
//   obj.options = options;
//   obj.correctAnswerIndex = correctAnswerIndex;
//   return obj
// }

// Question.prototype = {
//   isAnswerCorrect(index) {
//     return index == this.correctAnswerIndex
//   },
//   getCorrectAnswer() {
//     return this.options[this.correctAnswerIndex]
//   }
// }
// function Question(title, options, correctAnswerIndex) {
//   let obj = Object.create(Question.prototype)
//   obj.title = title;
//   obj.options = options;
//   obj.correctAnswerIndex = correctAnswerIndex;
//   return obj
// }

class Question {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return index == this.correctAnswerIndex
  };
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex]
  }
}


let firstQuestion = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);