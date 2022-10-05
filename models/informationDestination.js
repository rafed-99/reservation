const mongoose = require('mongoose');

const informationDestinationSchema = new mongoose.Schema({

    capitale : { type : String , required : true , unique : true ,},
    population : { type : Number , required : true , unique : true ,},
    devise : { type : String , required : true ,}

});
const informationDestination = mongoose.model("informationDestination",informationDestinationSchema);
module.exports = informationDestination;