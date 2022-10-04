const router = require('express').Router();
const destinationController = require('../controller/DestinationController');

router.get('/getdestinations',destinationController);


module.exports = router;