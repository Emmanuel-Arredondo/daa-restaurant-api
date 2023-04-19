const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String},
   people:{type:Number,required:true},
    reservationDate:{type:Date,required:true  },
    reservationSchedule:{type:String,required:true}, 
});

const Reservation = mongoose.model('Reservation',reservationSchema);
module.exports = Reservation;