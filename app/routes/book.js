const router = require('app/utils/express')();
const subRouter = require('app/utils/express')();
const bookAction = require('app/actions/book');
const { assertNotNull, toInteger } = require('app/utils/request-validator');

router.get('/', async (req, res) => {
  const result = await bookAction.getBooks();

  res.json({ data: result });
});

router.post('/', async (req, res) => {
  assertNotNull(req.body, 'title');
  assertNotNull(req.body, 'author');
  assertNotNull(req.body, 'isbn');
  assertNotNull(req.body, 'publishedOn');
  assertNotNull(req.body, 'numberOfPages');

  const result = await bookAction.createBook(req.body);

  res.json({ data: result });
});

router.use(
  '/:id',
  req => {
    req.parent.id_book = toInteger(req.params.id);
  },
  subRouter
);

subRouter.get('/', async (req, res) => {
  const id = req.parent.id_book;

  res.json({ data: await bookAction.getBookById(id) });
});

subRouter.put('/', async (req, res) => {
  await bookAction.updateBook(req.parent.id_book, req.body);

  res.status(204).end();
});

subRouter.delete('/', async (req, res) => {
  await bookAction.deleteBook(req.parent.id_book);

  res.status(204).end();
});

module.exports = router.express();
