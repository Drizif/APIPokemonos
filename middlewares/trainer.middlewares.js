const Validator = require('../validators/trainer.validators');

class Middleware {
  async login(req, res, next) {
    try {
      req.trainer = await Validator.login().validateAsync({
        ...req.body
      });
      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  }

  async getTrainer(req, res, next) {
    try {
      req.trainer = await Validator.getTrainer().validateAsync({
        ...req.query
      });
      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  }

  async getQR(req, res, next) {
    try {
      req.trainer = await Validator.getQR().validateAsync({
        ...req.query
      });
      next();
    } catch (error) {
      res.status(400).send(error.message || error);
    }
  }

  async createTrainer(req, res, next) {
    try {
      req.trainer = await Validator.createTrainer().validateAsync({
        ...req.body
      });
      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  }

  async updateTrainer(req, res, next) {
    try {
      req.trainer = await Validator.updateTrainer().validateAsync({
        ...req.body
      });
      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  }

  async deleteTrainer(req, res, next) {
    try {
      req.trainer = await Validator.deleteTrainer().validateAsync({
        ...req.query
      });
      next();
    } catch (error) {
      res.status(400).json({ status: false, message: error.message || error });
    }
  }
}

module.exports = new Middleware();