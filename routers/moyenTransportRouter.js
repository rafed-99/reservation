const express = require('express');
const router = express.Router();
const moyenRouter = require('../controller/moyenTransportController');

router.get('/getmoyen',moyenRouter.GetMoyen);
router.get('/getmoyen/:id',moyenRouter.GetMoyenById);
router.post('/addmoyen',moyenRouter.AddMoyen);
router.put('/updatemoyen/:id',moyenRouter.UpdateMoyen);
router.delete('/deletemoyen/:id',moyenRouter.DeleteMoyen);

module.exports = router;