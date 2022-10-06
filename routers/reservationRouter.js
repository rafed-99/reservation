const express = require('express');
const router = express.Router();
const reservationController = require('../controller/reservationController');

router.get('/getreservation',reservationController.GetReservation);
router.get('/getreservationbyid/:id',reservationController.GetReservationById);
router.post('/addreservation',reservationController.AddReservation);
router.put('/updatereservation/:id',reservationController.UpdateReservation);
router.delete('/deletereservation/:id',reservationController.DeleteReservation);

module.exports = router;