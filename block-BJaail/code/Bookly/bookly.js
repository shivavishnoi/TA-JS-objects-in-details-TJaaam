// <tr>
//   <td><input type="checkbox"></td>
//   <td class="title">Alfreds Futterkiste</td>
//   <td class="author">Maria Anders</td>
//   <td class="isbn">Germany</td>
//   <td class="close">❌</td>
// </tr>

class Booklist {
  constructor(root, list = []) {
    this.root = root;
    this.books = list;
  }
  add(book, author, isbn) {
    let singleBook = new Book(book, author, isbn);
    this.books.push(singleBook)
    this.createListUI();
    console.log(this.books.length)
  }
  delete(isbn) {
    let index = this.books.findIndex((book) => book.isbn === isbn)
    this.books.splice(index, 1)
    this.createListUI()
    console.log(this.books.length)
  }
  createListUI() {
    this.root.innerHTML = ""
    this.books.forEach((book) => {
      let ui = book.createBookUI()
      ui.querySelector(`.close`).addEventListener(`click`, this.delete.bind(this, ui.querySelector(`.isbn`).innerText))
      this.root.append(ui)
    })
  }
}

class Book {
  constructor(book, author, isbn) {
    this.hasRead = false;
    this.book = book;
    this.author = author;
    this.isbn = isbn;
  }
  createBookUI() {
    let tr = document.createElement(`tr`);
    let td1 = document.createElement(`td`);
    let input = document.createElement(`input`);
    input.type = `checkbox`;
    input.checked = this.hasRead;
    let td2 = document.createElement(`td`);
    td2.innerText = this.book;
    td2.classList.add(`title`)
    let td3 = document.createElement(`td`);
    td3.innerText = this.author;
    td3.classList.add(`author`)
    let td4 = document.createElement(`td`);
    td4.innerText = this.isbn;
    td4.classList.add(`isbn`);
    let td5 = document.createElement(`td`);
    td5.innerText = `❌`;
    td5.classList.add(`close`);
    input.addEventListener(`click`, () => {
      this.hasRead = !this.hasRead;
      let data = [td2, td3, td4]
      if (this.hasRead) {
        td2.innerHTML = ""
        td3.innerHTML = ""
        td4.innerHTML = ""
        td2.innerHTML = this.book.strike();
        td3.innerHTML = this.author.strike();
        td4.innerHTML = this.isbn.strike();
      }
      else {
        td2.innerHTML = ""
        td3.innerHTML = ""
        td4.innerHTML = ""
        td2.innerHTML = this.book;
        td3.innerHTML = this.author;
        td4.innerHTML = this.isbn;
      }
      this.createBookUI()
    })
    td1.append(input);
    tr.append(td1, td2, td3, td4, td5);
    return tr;
  }
}
let book1 = new Booklist(document.querySelector(`tbody`))


document.querySelector(`form`).addEventListener(`submit`, (e) => {
  e.preventDefault()
  let title = e.target.elements.title.value;
  if (title == "") {
    document.querySelector(`.title-error`).innerText = `Book title cannot be Empty`
    document.querySelector(`.title-error`).style.color = `red`
  }
  let author = e.target.elements.author.value;
  if (author == "") {
    document.querySelector(`.author-error`).innerText = `Book author cannot be Empty`
    document.querySelector(`.author-error`).style.color = `red`
  }
  let isbn = e.target.elements.isbn.value;
  if (isbn == "") {
    document.querySelector(`.isbn-error`).innerText = `Book ISBN cannot be Empty`
    document.querySelector(`.isbn-error`).style.color = `red`
  }
  if (title != "" && author != "" && isbn.length >= 10) {
    book1.add(title, author, isbn)
    e.target.elements.title.value = ""
    e.target.elements.author.value = ""
    e.target.elements.isbn.value = ""
    document.querySelector(`.title-error`).innerText = ``
  }

})