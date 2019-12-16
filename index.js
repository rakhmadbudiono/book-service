require('app-module-path').addPath(`${__dirname}`);

const mongoose = require('mongoose');
const cfg = require('config');

mongoose
  .connect(
    `mongodb://${cfg.MONGO_HOST}:${cfg.MONGO_PORT}/${cfg.MONGO_DATABASE}`,
    { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }
  )
  .then(() => {
    require('app');
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
