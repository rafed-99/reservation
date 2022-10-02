const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({

    dateAller : { type : Date , required : true },
    dateRetour : { type : Date , required : true },
    nbrPersonnes : { type : Number , required : true },
    paysDepart : { type : mongoose.SchemaTypes.ObjectId , ref : "PaysDepart"},  //relation one to one 
    paysArrive : { type : mongoose.SchemaTypes.ObjectId , ref : "PaysArrive"},
    moyenTransport : { type : mongoose.SchemaTypes.ObjectId , ref : "MoyenTransport"},
    allogement : { type : mongoose.SchemaTypes.ObjectId , ref : "Allogement"},
    prixTotal : { type : Number , required : true }

});

const reservation = mongoose.model("Reservation",reservationSchema);
module.exports = reservation;


