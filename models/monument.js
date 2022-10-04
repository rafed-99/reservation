const mongoose = require('mongoose');

const monumentSchema = new mongoose.Schema({

    nomMonument : { Type : String , required : true , unique : true },
    imageMonument : { Type : mongoose.SchemaTypes.ObjectId , ref : "ImageMonument" }

})

const monument = mongoose.model("Monument",monumentSchema);
module.exports = monument;