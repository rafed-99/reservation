const mongoose = require('mongoose');

const informationDestinationSchema = new mongoose.Schema({

    capitale : { Type : String , required : true , unique : true ,},
    population : { Type : Number , required : true , unique : true ,},
    devise : { Type : String , required : true ,}

});
const informationDestination = mongoose.model("informationDestination",informationDestinationSchema);
module.exports = informationDestination;