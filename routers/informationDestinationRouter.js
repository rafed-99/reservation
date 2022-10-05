const express = require('express');
const router = express.Router();
const informationDestinationController = require('../controller/informationDestinationController');

router.get('/getinformation',informationDestinationController.GetInfo);
router.get('/getinformation/:id',informationDestinationController.GetInfoById);
router.post('/addinformation',informationDestinationController.AddInfo);
router.put('/updateinformation/:id',informationDestinationController.UpdateInfo);
router.delete('/deleteinformation/:id',informationDestinationController.DeleteInfo);

module.exports = router;