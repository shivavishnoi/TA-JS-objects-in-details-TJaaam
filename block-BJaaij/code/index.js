class BookList {
  constructor(index) {
    this.books = []
    this.bookIndex = index
  }
  add(BookList) {
    this.book = this.books.concat(BookList)
  }
  getCurrentBook() {
    return this.books[this.bookIndex]
  }
  getNextBook() {
    return this.books[this.bookIndex + 1]
  }
  getPrevBook() {
    return this.books[this.bookIndex - 1]
  }
  changeCurrentBook(index) {
    this.bookIndex = index
  }
}

class Book {
  constructor(title, category, author, isRead = false, finishedDate) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = isRead;
    this.finishedDate = finishedDate;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}