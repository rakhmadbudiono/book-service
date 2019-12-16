const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrementModelID = require('./counter').autoIncrementModelID;

const BookSchema = new Schema({
  _id: {
    type: Number
  },
  title: {
    type: String
  },
  author: {
    type: String
  },
  isbn: {
    type: String
  },
  publishedOn: {
    type: Number
  },
  numberOfPages: {
    type: Number
  }
});

BookSchema.pre('save', function(next) {
  if (!this.isNew) {
    next();

    return;
  }
  autoIncrementModelID('book', this, next);
});

const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;
