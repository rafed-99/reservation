const express = require('express');
const router = express.Router();
const destinationController = require('../controller/destinationController');

router.get('/getdestination',destinationController.GetDestination);
router.get('/getdestination/:id',destinationController.GetDestinationById);
router.post('/adddestination',destinationController.AddDestination);
router.put('/updatedestination/:id',destinationController.UpdateDestination);
router.delete('/deletedestination/:id',destinationController.DeleteDestination);

module.exports = router;