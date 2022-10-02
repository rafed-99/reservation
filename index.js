const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connected")).catch((err) => console.log(err))

app.listen(process.env.PORT, ()=>{
    console.log("app running");

});