const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>res.status(200).send('Get/reservations succeeded'));
router.post('/',(req,res)=>res.status(201).send('Post/reservations succeeded'));
router.get('/:id',(req,res)=>res.status(200).send('Get/reservations/:id succeeded'));
router.put('/:id',(req,res)=>res.status(200).send('Put/reservations/:id succeeded'));
router.delete('/:id',(req,res)=>res.status(204).send('Delete/reservations/:id succeeded'));

module.exports = router;