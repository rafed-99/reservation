const mongoose = require('mongoose');

const allogementSchema = new mongoose.Schema({

    nomAllogement : { type : String , required : true ,},
    etoiles : { type : Number , required : true , default : 2 , min : 2, max : 5,},
    prixUnitaireAllogement : { type : Number , required : true ,}

})

const Allogement  = mongoose.model("Allogement",allogementSchema);
module.exports = Allogement;