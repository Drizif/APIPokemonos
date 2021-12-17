const router = require('express').Router();
const Controller = require('../controllers/trainer.controllers');
const Middleware = require('../middlewares/trainer.middlewares');

router.post('/trainer', Middleware.createTrainer, Controller.createTrainer);
router.post('/login', Middleware.login, Controller.login);
router.get('/trainer', Middleware.getTrainer, Controller.getTrainer);
router.put('/trainer', Middleware.updateTrainer, Controller.updateTrainer);
router.delete('/trainer', Middleware.deleteTrainer, Controller.deleteTrainer);

module.exports = router;