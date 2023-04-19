const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>res.status(200).send('Get/users succeeded'));
router.post('/',(req,res)=>res.status(201).send('Post/users succeeded'));
router.get('/:id',(req,res)=>res.status(200).send('Get/users/:id succeeded'));
router.delete('/:id',(req,res)=>res.status(204).send());


module.exports = router;