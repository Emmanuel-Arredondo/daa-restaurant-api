const express =require('express');
require('dotenv').config();
const mongoose = require('mongoose');


const app = express();


const homeRoutes = require('./sr/routes/home.routes');
const reservationsRoutes = require('./sr/routes/reservations.routes');
const usersRoutes = require('./sr/routes/users.routes');

app.use('/',homeRoutes);
app.use('/reservations',reservationsRoutes);    
app.use('/users',usersRoutes);

const main=async ()=>{
    try{
    await mongoose.connect(process.env.DB_URL);
    app.listen(process.env.PORT,()=>console.log('Server listening at port'+process.env.PORT));
    }
    catch(err){
        console.log(err);
    }
}


main();

