const GroupBuilder = require('./GroupBuilder');
const HashBuilder = require('./HashBuilder');

function firstObjectIn(collection) {
  if (collection.length > 0) {
    return collection[0];
  }

  return null;
}

function hash(collection) {
  return new HashBuilder(collection);
}

function group(groupName) {
  return new GroupBuilder(groupName);
}

module.exports = {
  firstObjectIn,
  group,
  hash
};
