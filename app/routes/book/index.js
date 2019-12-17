const router = require('app/utils/express')();
const subRouter = require('app/utils/express')();
const handler = require('app/routes/book/handler');
const { toInteger } = require('app/utils/request-validator');

router.get('/', (req, res) => handler.getBooks(req, res));

router.post('/', (req, res) => handler.createBook(req, res));

router.use(
  '/:id',
  req => {
    req.parent.id_book = toInteger(req.params.id);
  },
  subRouter
);

subRouter.get('/', (req, res) => handler.getBookById(req, res));

subRouter.put('/', (req, res) => handler.updateBook(req, res));

subRouter.delete('/', (req, res) => handler.deleteBook(req, res));

module.exports = router.express();
