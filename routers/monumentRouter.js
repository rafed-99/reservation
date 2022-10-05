const express = require('express');
const router = express.Router();
const monumentController = require('../controller/monumentController');

router.get('/getmonument',monumentController.GetMonument);
router.get('/getmonument/:id',monumentController.GetMonumentById);
router.post('/addmonument',monumentController.AddMonument);
router.put('/updatemonument/:id',monumentController.UpdateMonument);
router.delete('/deletemonument/:id',monumentController.DeleteMonument);

module.exports = router;