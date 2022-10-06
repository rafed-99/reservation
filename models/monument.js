const mongoose = require('mongoose');

const monumentSchema = new mongoose.Schema({

    nomMonument : { type : String , required : true , unique : true ,},
    

})

const monument = mongoose.model("Monument",monumentSchema);
module.exports = monument;