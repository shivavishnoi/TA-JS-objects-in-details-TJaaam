let selected = ``
class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  isCorrect(answer) {
    return answer == this.correctAnswer;
  }
  getCorrectAnswer() {
    return this.correctAnswer;
  }
  createQuestionUI() {
    let div = document.createElement(`div`)
    div.innerHTML = `<h2> <span>Q)</span> ${this.title}</h2>
        <input type="radio" id="op-1" name="option"> <label for="op-1">${this.options[0]}</label>
        <input type="radio" id="op-2" name="option"><label for="op-2">${this.options[1]}</label>
        <input type="radio" id="op-3" name="option"> <label for="op-3">${this.options[2]}</label>
        <input type="radio" id="op-4" name="option"> <label for="op-4">${this.options[3]}</label>`
    div.querySelectorAll(`input`).forEach((el) => {
      el.addEventListener(`click`, (e) => {
        selected = e.target.nextElementSibling.innerText
      })
    })

    return div;
  }
}
let question1 = new Question(`What is capital of India?`, [`New Delhi`, `Mumbai`, `Bangalore`, `Bhopal`], `New Delhi`)
let question2 = new Question(`Who wrote famous hindi novel Godaan?`, [`Ageya`, `Mahadevi verma`, `Munshi Premchand`, `Nagarjun`], `Munshi Premchand`)
let question3 = new Question(`What is name India's National Aquatic animal?`, [`Whale`, `River Dolphin`, `Green Frog`, `Crocodile`], `River Dolphin`)
let question4 = new Question(`Delhi is located along what river?`, [`Ganga`, `Yamuna`, `Brahmaputra`, `Narmada`], `Yamuna`)
let question5 = new Question(`When is India’s Independence Day?`, [`January 1`, `October 31`, `July 14`, `August 15`], `August 15`)


class Quiz {
  constructor(allQuestions, activeIndex, score, root) {
    this.allQuestions = allQuestions
    this.activeIndex = activeIndex;
    this.score = score;
    this.root = root
  }
  nextQuestion() {
    if (this.activeIndex < this.allQuestions.length) {
      this.activeIndex += 1;
      this.updateScore()
      try {
        this.createUI()
      }
      catch (err) {
        this.root.innerHTML = `<h2>Hurray!! Quiz Over.</h2>`
        document.querySelector(`button`).style.display = `none`
      }
    }

  }
  createUI() {
    this.root.innerHTML = ""
    let qUI = this.allQuestions[this.activeIndex].createQuestionUI()
    this.root.append(qUI)
  }
  updateScore() {
    let score = document.querySelector(`.score`)
    if (this.allQuestions[this.activeIndex - 1].isCorrect(selected)) {
      this.score += 1;
      score.innerText = this.score
    }


  }
}

let quiz = new Quiz([question1, question2, question3, question4, question5], 0, 0, document.querySelector(`section`))
quiz.createUI()

let button = document.querySelector(`button`)
button.addEventListener(`click`, () => {
  quiz.nextQuestion()
})







