const express = require('express');
const router = express.Router();

const reservationsController = require('../controllers/reservations.controller');

router.get('/',reservationsController.getAllReservations);
router.post('/',reservationsController.createReservation);
router.get('/:id',  reservationsController.getReservationById);
router.put('/:id',  reservationsController.updateReservationById);
router.delete('/:id',   reservationsController.deleteReservationById);

module.exports = router;