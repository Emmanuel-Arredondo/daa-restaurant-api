const express =require('express');
const bodyparser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');


const firstUserUtils = require('./sr/utils/first-user.utils');


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



const homeRoutes = require('./sr/routes/home.routes');
const reservationsRoutes = require('./sr/routes/reservations.routes');
const usersRoutes = require('./sr/routes/users.routes');

app.use('/',homeRoutes);
app.use('/reservations',reservationsRoutes);    
app.use('/users',usersRoutes);

const main=async ()=>{
    try{
    await mongoose.connect(process.env.DB_URL);
    await firstUserUtils.createFirstUser();
    app.listen(process.env.PORT,()=>console.log('Server listening at port'+process.env.PORT));
    }
    catch(err){
        console.log(err);
    }
}


main();

