const express = require('express');
const router = express.Router();
const allogementController = require('../controller/allogementController');

router.get('/getallogement',allogementController.GetAllogement);
router.get('/getallogement/:id',allogementController.GetAllogementById);
router.post('/addallogement',allogementController.AddAllogement);
router.put('/updateallogement/:id',allogementController.UpdateAllogement);
router.delete('/deleteallogement/:id',allogementController.DeleteAllogment);
router.get('/sortallogementascbyprice',allogementController.SortAllogementAscByPrice);
router.get('/sortallogementdscbyprice',allogementController.SortAllogementDscByPrice);
router.get('/sortallogementascbyetoiles',allogementController.SortAllogementAscByEtoile);
router.get('/sortallogementdscbyetoiles',allogementController.SortAllogementDscByEtoile);


/*router.get('/filter',allogementController.Filter);*/


module.exports = router;