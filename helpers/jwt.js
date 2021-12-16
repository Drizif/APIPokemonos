const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_KEY, JWT_EXPIRATION } = process.env;

const verifyJWT = async ({ token }) => {
  return await jwt.verify(token, SECRET_KEY);
}

const generateJWT = async (id) => {
  return await jwt.sign({ id }, SECRET_KEY, { expiresIn: JWT_EXPIRATION });
}

module.exports = {
  generateJWT,
  verifyJWT
}