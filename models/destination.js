const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({

    nomDestination : { Type:String , required:true , unique:true },
    abbreviationDestination : {Type:String , required:true , unique:true }

})

const destination = mongoose.model("PaysArrive",destinationSchema);
module.exports = destination;