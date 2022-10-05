const express = require('express');
const router = express.Router();
const compagnieController = require('../controller/compagnieController');

router.get('/getcompagnie',compagnieController.GetCompagnie);
router.get('/getcompagnie/:id',compagnieController.GetCompagnieById);
router.post('/addcompagnie',compagnieController.AddCompagnie);
router.put('/updatecompagnie/:id',compagnieController.UpdateCompagnie);
router.delete('/deletecompagnie/:id',compagnieController.DeleteCompagnie);

module.exports = router;