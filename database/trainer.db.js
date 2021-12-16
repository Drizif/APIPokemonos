const bcrypt = require('bcryptjs');
const Trainer = require('../models/trainer.model');

class DBFunctions {
  async createTrainer(config) {
    try {
      const trainer = new Trainer(config);
      const salt = bcrypt.genSaltSync();
      trainer.password = bcrypt.hashSync(config.password, salt);

      await trainer.save();
    } catch (error) {
      if (error.message.includes('E11000')) {
        error.message = 'Some data already exists';
      }
      throw error;
    }
  }

  async updateTrainer(noCtrl, trainer) {
    try {
      const salt = bcrypt.genSaltSync();
      trainer.password = bcrypt.hashSync(trainer.password, salt);
      return await Trainer.findOneAndUpdate({ noCtrl }, trainer, { new: true });
    } catch (error) {
      if (error.message.includes('E11000')) {
        error.message = 'Some data already exists'
      }
      throw error;
    }
  }

  async existsNoCtrl(noCtrl) {
    try {
      return await Trainer.findOne({ noCtrl }, 'password');
    } catch (error) {
      throw error;
    }
  }

  async login(password, trainer) {
    const validPass = bcrypt.compareSync(password, trainer.password);
    if (!validPass) {
      return null;
    }

    return await generateJWT(trainer.noCtrl);
  }

  async getTrainers(from, to) {
    try {
      return await Trainer.find({}, 'noCtrl name email favPok')/*.skip(parseInt(from)).limit(parseInt(to));*/
    } catch (error) {
      throw error;
    }
  }

  async getTrainer(noCtrl) {
    try {
      return await Trainer.findOne({ noCtrl }, 'noCtrl name email favPok');
    } catch (error) {
      throw error;
    }
  }

  async deleteTrainer(noCtrl) {
    try {
      return await Trainer.findOneAndDelete({ noCtrl });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new DBFunctions();