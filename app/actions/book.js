const bookRepo = require('app/repositories/book');

function createBook(data) {
  return bookRepo.createBook(data);
}

function getBooks() {
  return bookRepo.getBooks();
}

function getBookById(bookId) {
  return bookRepo.getBookById(bookId);
}

function updateBook(bookId, data) {
  return bookRepo.updateBook(bookId, data);
}

function deleteBook(bookId) {
  return bookRepo.deleteBook(bookId);
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
};
