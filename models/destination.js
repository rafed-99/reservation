const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({

    nomDestination : { type:String , required:true , unique:true ,},
    abbreviationDestination : {type:String , required:true , unique:true ,},
    informationDestination : { type : mongoose.SchemaTypes.ObjectId , ref : "InformationDestination" ,},
    monuments : [
        {
            type : mongoose.SchemaTypes.ObjectId , ref : "Monument"
        }
    ],
})

const destination = mongoose.model("Destination",destinationSchema);
module.exports = destination;