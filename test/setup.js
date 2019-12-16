const mongoose = require('mongoose');
const cfg = require('config');

beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(
      `mongodb://${cfg.MONGO_HOST}:${cfg.MONGO_PORT}/${cfg.MONGO_DATABASE}`,
      { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }
    );
  }
});

afterAll(async () => {
  await mongoose.disconnect();
});
