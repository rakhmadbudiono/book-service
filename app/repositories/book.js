const Book = require('app/models/book');
const { returnOnlyDefinedProps } = require('app/utils/object');

async function createBook(data) {
  const result = await Book.create({
    title: data.title,
    author: data.author,
    isbn: data.isbn,
    publishedOn: data.publishedOn,
    numberOfPages: data.numberOfPages
  });

  return { id: result._id };
}

function getBooks() {
  return Book.find(
    {},
    {
      _id: 1,
      title: '',
      author: '',
      isbn: 1,
      publishedOn: 1,
      numberOfPages: 1
    }
  ).exec();
}

function getBookById(bookId) {
  return Book.findOne(
    { _id: bookId },
    {
      _id: 1,
      title: '',
      author: '',
      isbn: 1,
      publishedOn: 1,
      numberOfPages: 1
    }
  ).exec();
}

async function updateBook(bookId, data) {
  const result = await Book.findOneAndUpdate(
    {
      _id: bookId
    },
    {
      $set: returnOnlyDefinedProps(data, [
        'title',
        'author',
        'isbn',
        'publishedOn',
        'numberOfPages'
      ])
    },
    {
      upsert: true
    }
  ).exec();

  return result != null ? 1 : 0;
}

async function deleteBook(bookId) {
  const result = await Book.findOneAndDelete({ _id: bookId }).exec();

  return result == null ? 0 : 1;
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
};
