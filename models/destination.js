const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({

    nomDestination : { Type:String , required:true , unique:true ,},
    abbreviationDestination : {Type:String , required:true , unique:true ,},
    informationDestination : { Type : mongoose.SchemaTypes.ObjectId , ref : "InformationDestination" ,},
    monuments : [
        {
            Type : mongoose.SchemaTypes.ObjectId , ref : "Monument"
        }
    ],
    videoPublicitaire : { Type : mongoose.SchemaTypes.ObjectId , ref : "VideoPublicitaire",}
})

const destination = mongoose.model("Destination",destinationSchema);
module.exports = destination;