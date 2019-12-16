const assert = require('assert');

const BadRequestError = require('app/libs/service-error/BadRequestError');

const convert = require('./convert');

function assertNotNull(object, propertyName) {
  try {
    return assert(
      object[propertyName] != null,
      `${propertyName} should not be null`
    );
  } catch (error) {
    throw new BadRequestError(error);
  }
}

function toInteger(value) {
  try {
    return convert.toInteger(value);
  } catch (error) {
    throw new BadRequestError(error);
  }
}

function toArrayInteger(value) {
  try {
    return convert.toArrayInteger(value);
  } catch (error) {
    throw new BadRequestError(error);
  }
}

function assertGreaterThanZero(value) {
  const i = toInteger(value);
  try {
    return assert(
      i > 0,
      `${value} should be greater than zero`
    );
  } catch (error) {
    throw new BadRequestError(error);
  }
}

function assertNonNegative(value) {
  const i = toInteger(value);
  try {
    return assert(
      i >= 0,
      `${value} should be non negative number`
    );
  } catch (error) {
    throw new BadRequestError(error);
  }
}

function assertNotNullAny(object, propertiesName) {
  for (const propertyName of propertiesName) {
    if (object[propertyName] != null) return;
  }

  throw new BadRequestError(
    Error(`any of ${propertiesName} should not be null`)
  );
}

module.exports = {
  assertNotNull,
  toInteger,
  toArrayInteger,
  assertGreaterThanZero,
  assertNonNegative,
  assertNotNullAny
};
