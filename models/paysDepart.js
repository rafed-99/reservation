const mongoose = require('mongoose');

const PaysDepartSchema = new mongoose.Schema({

    nomPaysDepart : {type : String , required : true , },
    abbreviationPaysDepart : {type : String , required : true , uppercase : true , } ,

})

const PaysDepart = mongoose.model("PaysDepart",PaysDepartSchema);
module.exports = PaysDepart;