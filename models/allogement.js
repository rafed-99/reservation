const mongoose = require('mongoose');

const allogementSchema = new mongoose.Schema({

    nomAllogement : { type : String , required : true ,},
    etoiles : { type : Number , required : true , min : 2, max : 5,},
    prixUnitaireAllogement : { type : Number , required : true ,}

})

const allogement  = mongoose.model("Allogement",allogementSchema);
module.exports = allogement;