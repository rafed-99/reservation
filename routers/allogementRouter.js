const express = require('express');
const router = express.Router();
const allogementController = require('../controller/allogementController');

router.get('/getallogement',allogementController.GetAllogement);
router.get('/getallogement/:id',allogementController.GetAllogementById);
router.post('/addallogement',allogementController.AddAllogement);
router.put('/updateallogement/:id',allogementController.UpdateAllogement);
router.delete('/deleteallogement/:id',allogementController.DeleteAllogment);
router.get('/sortallogementasc',allogementController.SortAllogementAsc);
router.get('/sortallogementdsc',allogementController.SortAllogementDsc);


module.exports = router;