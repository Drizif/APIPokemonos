const Joi = require('joi');

class Validator {
  login() {
    return Joi.object().keys({
      noCtrl: Joi.string().max(9).optional(),
      password: Joi.string().required()
    }).options({ allowUnknown: true, stripUnknown: true });
  }

  getTrainer() {
    return Joi.object().keys({
      noCtrl: Joi.string().max(9).optional(),
    }).options({ allowUnknown: true, stripUnknown: true });
  }

  createTrainer() {
    return Joi.object().keys({
      noCtrl: Joi.string().max(9).required(),
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      favPok: Joi.array().optional().default(null)
    }).options({ allowUnknown: true, stripUnknown: true });
  }

  updateTrainer() {
    return Joi.object().keys({
      noCtrl: Joi.string().max(9).required(),
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      favPok: Joi.array().optional().default(null)
    }).options({ allowUnknown: true, stripUnknown: true });
  }

  deleteTrainer() {
    return Joi.object().keys({
      noCtrl: Joi.string().max(9).required(),
    }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new Validator();