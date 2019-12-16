module.exports = {
  MONGO_HOST: process.env.MONGO_HOST 
    || 'localhost',
  MONGO_PORT: process.env.MONGO_PORT 
    || '27017',
  MONGO_DATABASE: process.env.MONGO_DATABASE
    || process.env.SERVICE_NAME,
};