const handler = require('app/routes/book/handler');

function mockRequest(body, parent) {
  return { body: body, parent: parent };
}

function mockResponse() {
  const res = { end: () => {} };
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);

  return res;
}

describe('book', () => {
  const book = {
    title: 'The Title',
    author: 'The Author',
    isbn: 'ISBN Code',
    publishedOn: 2019,
    numberOfPages: 188
  };

  describe('book creation', () => {
    it('should create a book', async () => {
      const req = mockRequest(book);
      const res = mockResponse();

      await handler.createBook(req, res);
    });

    describe('book retrieval', () => {
      it('should get books', async () => {
        const req = mockRequest();
        const res = mockResponse();

        await handler.getBooks(req, res);
      });

      it('should get a book', async () => {
        const body = {};
        const parent = { id_books: 1 };
        const req = mockRequest(body, parent);
        const res = mockResponse();

        await handler.getBookById(req, res);
      });
    });

    describe('book modification', () => {
      const newBook = {
        title: 'New Title',
        author: 'New Author',
        isbn: 'New ISBN Code',
        publishedOn: 2020,
        numberOfPages: 288
      };

      it('should change a book', async () => {
        const parent = { id_books: 1 };
        const req = mockRequest(newBook, parent);
        const res = mockResponse();

        await handler.updateBook(req, res);

        expect(res.status).toHaveBeenCalledWith(204);
      });
    });
  });

  describe('book deletion', () => {
    it('should delete a book', async () => {
      const body = {};
      const parent = { id_books: 1 };
      const req = mockRequest(body, parent);
      const res = mockResponse();

      await handler.deleteBook(req, res);

      expect(res.status).toHaveBeenCalledWith(204);
    });
  });
});
