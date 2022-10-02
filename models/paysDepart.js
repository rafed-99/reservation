const mongoose = require('mongoose');

const PaysDepartSchema = new mongoose.Schema({

    Nom_PaysDepart : { Type:String , required:true , unique:true },
    Abbreviation_PaysDepart : {Type:String , required:true , unique:true }

})

const paysDepart = mongoose.model("PaysDepart",PaysDepartSchema);
module.exports = paysDepart;