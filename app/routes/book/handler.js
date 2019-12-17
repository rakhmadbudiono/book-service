const bookAction = require('app/actions/book');
const { assertNotNull } = require('app/utils/request-validator');

async function getBooks(req, res) {
  const result = await bookAction.getBooks();

  res.json({ data: result });
}

async function createBook(req, res) {
  assertNotNull(req.body, 'title');
  assertNotNull(req.body, 'author');
  assertNotNull(req.body, 'isbn');
  assertNotNull(req.body, 'publishedOn');
  assertNotNull(req.body, 'numberOfPages');

  const result = await bookAction.createBook(req.body);

  res.json({ data: result });
}

async function getBookById(req, res) {
  const id = req.parent.id_book;

  res.json({ data: await bookAction.getBookById(id) });
}

async function updateBook(req, res) {
  await bookAction.updateBook(req.parent.id_book, req.body);

  res.status(204).end();
}

async function deleteBook(req, res) {
  await bookAction.deleteBook(req.parent.id_book);

  res.status(204).end();
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
};
