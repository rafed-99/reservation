const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({

    dateAller : { type : Date , required : true , },
    dateRetour : { type : Date , required : true ,},
    nbrPersonnes : { type : Number , required : true ,},  // n5ammem nbadelha btari9a o5ra 
    paysDepart : { type : mongoose.SchemaTypes.ObjectId , ref : "PaysDepart" ,},  //relation one to one 
    destination : { type : mongoose.SchemaTypes.ObjectId , ref : "Destination" ,},  //c'est le meme de pays d'arrive
    moyenTransport : { type : mongoose.SchemaTypes.ObjectId , ref : "MoyenTransport" ,},
    allogement : { type : mongoose.SchemaTypes.ObjectId , ref : "Allogement" ,},
    prixTotal : { type : Number , required : true ,}

});

const reservation = mongoose.model("Reservation",reservationSchema);
module.exports = reservation;


