const trainerDb = require('../database/trainer.db');

class Controller {
  async login(req, res) {
    try {
      const { noCtrl, password } = req.trainer;

      const trainer = await trainerDb.existsNoCtrl(noCtrl);
      if (!trainer) {
        return res.status(404).json({
          status: false,
          message: 'Verify credentials'
        });
      }

      const token = await trainerDb.login(password, trainer);
      if (!token) {
        return res.status(400).json({
          status: false,
          message: 'Verify credentials'
        });
      }

      res.json({
        status: true,
        token,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
        data: null
      });
    }
  }

  async getTrainer(req, res) {
    try {
      const { noCtrl, from, to } = req.trainer

      const data = noCtrl ? await trainerDb.getTrainer(noCtrl) : await trainerDb.getTrainers(from, to);

      res.status(200).json({
        status: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error
      });
    }
  }

  async createTrainer(req, res) {
    try {
      await trainerDb.createTrainer(req.trainer);

      res.status(200).json({
        status: true,
        message: 'Trainer successfully created'
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
      });
    }
  }

  async updateTrainer(req, res) {
    try {
      const { noCtrl, name, email, password, favPok } = req.trainer;
      const trainer = await trainerDb.existsNoCtrl(noCtrl);
      if (!trainer) {
        return res.status(404).json({
          status: false,
          message: 'Trainer does not exists'
        });
      }
      await trainerDb.updateTrainer(noCtrl, { name, email, password, favPok});

      res.json({
        status: true,
        message: 'Trainer successfully updated',
        data: req.trainer
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
      });
    }
  }

  async deleteTrainer(req, res) {
    try {
      const { noCtrl } = req.trainer;
      const trainer = await trainerDb.existsNoCtrl(noCtrl);
      if (!trainer) {
        return res.status(404).json({
          status: false,
          message: `Trainer ${noCtrl} does not exists`
        });
      }
      await trainerDb.deleteTrainer(noCtrl);
      res.json({
        status: true,
        message: `Trainer "${noCtrl}" successfully deleted`
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || error,
      });
    }
  }
}

module.exports = new Controller();