const mongoose = require('mongoose');

const allogementSchema = new mongoose.Schema({

    nomAllogement : { type : String , required : true },
    etoiles : { type : Number , required : true , default : 2 },
    prixUnitaireAllogement : { type : Number , required : true }

})

const allogement  = mongoose.model("Allogement",allogementSchema);
module.exports = allogementSchema;