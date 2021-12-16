const Validator = require('../validators/token.validators');
const { verifyJWT } = require('../helpers/jwt');

class Middleware {
  async verify(req, res, next) {
    try {
      req.token = await Validator.verify().validateAsync({
        ...req.headers
      });

      await verifyJWT(req.token);
      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message });
    }
  }

}

module.exports = new Middleware();