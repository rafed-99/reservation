const express = require('express');
const router = express.Router();
const paysDepartController = require('../controller/paysDepartController');

router.get('/getpaysdepart',paysDepartController.GetPaysDepart);
router.get('/getpaysdepart/:id',paysDepartController.GetPaysDepartById);
router.post('/addpaysdepart',paysDepartController.AddPaysDepart);
router.put('/updatepaysdepart/:id',paysDepartController.UpdatePaysDepart);
router.delete('/deletepaysdepart/:id',paysDepartController.DeletePaysDepart);

module.exports = router;