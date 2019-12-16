/*
 * --- NOTES ---
 * It is recommended to give SERVICE_NAME variable
 * a default value based on the service name.
 */

process.env.SERVICE_NAME = process.env.SERVICE_NAME || 'book_service';

module.exports = {
  ...require('./service'),
  ...require('./mongo')
};
