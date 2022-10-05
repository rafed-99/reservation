const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const reservationRouter = require('./routers/reservationRouter');
const paysDepartRouter = require('./routers/paysDepartRouter');
const allogementRouter = require('./routers/allogementRouter');

require('dotenv').config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connected")).catch((err) => console.log(err));

app.use("/reservation/",reservationRouter);
app.use("/paysdepart/",paysDepartRouter);
app.use("/allogement/",allogementRouter);


app.listen(process.env.PORT, ()=>{
    console.log("app running");


});