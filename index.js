const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const reservationRouter = require('./routers/reservationRouter');
const paysDepartRouter = require('./routers/paysDepartRouter');

require('dotenv').config();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connected")).catch((err) => console.log(err));

app.use("/reservation/",reservationRouter);
app.use("/paysdepart/",paysDepartRouter);

app.listen(process.env.PORT, ()=>{
    console.log("app running");


});