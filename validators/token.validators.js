const Joi = require('joi');

class Validator {
  verify() {
    return Joi.object().keys({
      token: Joi.string().required(),
    }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new Validator();