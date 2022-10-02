const mongoose = require('mongoose');

const moyenTransportSchema = new mongoose.Schema({

    typeMoyen : { type : String , default : "Avion"},
    compagnie : { type : mongoose.SchemaTypes.ObjectId , ref : "Compagnie"}

})

const moyenTransport = mongoose.model("MoyenTransport",moyenTransportSchema);
module.exports = moyenTransport;