const getAllReservations = (req,res)=>res.status(200).send('Get/reservations succeeded');
const createReservation = (req,res)=>res.status(201).send('Post/reservations succeeded');
const getReservationById = (req,res)=>res.status(200).send('Get/reservations/:id succeeded');
const updateReservationById = (req,res)=>res.status(200).send('Put/reservations/:id succeeded');
const deleteReservationById = (req,res)=>res.status(204).send('Delete/reservations/:id succeeded');

module.exports = {getAllReservations,createReservation,getReservationById,updateReservationById,deleteReservationById};
