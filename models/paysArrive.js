const mongoose = require('mongoose');

const paysArriveSchema = new mongoose.Schema({

    nomPaysDepart : { Type:String , required:true , unique:true },
    abbreviationPaysArrive : {Type:String , required:true , unique:true }

})

const paysArrive = mongoose.model("PaysArrive",paysArriveSchema);
module.exports = paysArrive;