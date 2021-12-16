const router = require('express').Router();
const Controller = require('../controllers/trainer.controllers');
const Middleware = require('../middlewares/trainer.middlewares');
const Token = require('../middlewares/token.middlewares');

router.post('/trainer', Middleware.createTrainer, Controller.createTrainer);
router.post('/login', Token.verify, Middleware.login, Controller.login);
router.get('/trainer', Token.verify, Middleware.getTrainer, Controller.getTrainer);
router.put('/trainer', Token.verify, Middleware.updateTrainer, Controller.updateTrainer);
router.delete('/trainer', Token.verify, Middleware.deleteTrainer, Controller.deleteTrainer);

module.exports = router;