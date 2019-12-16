function transform(collection, identifier) {
  const result = {};
  
  collection.forEach(v => {
    const key = v[identifier];
    result[key] = v;
  });

  return result;
}

class HashBuilder {
  constructor(collection) {
    this._collection = collection;
  }

  by(identifier) {
    return transform(this._collection, identifier);
  }
}

module.exports = HashBuilder;
