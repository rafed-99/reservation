const mongoose = require('mongoose');

const compagnieSchema = new mongoose.Schema({

    nomCompagnie : { type : String , required : true ,},
    prixUnitaireCompagnie : { type : Number , required : true ,}

})

const compagnie = mongoose.model("Compagnie",compagnieSchema);
module.exports = compagnie;