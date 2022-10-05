const reservation = require('../models/reservation');

const GetReservation = (req,res) => {
    reservation.find().then(
        response => {res.json({
            response
        })
    }).catch(error => {
        res.json({
            message : 'Error'
        })
    })
}

const GetReservationById = (req,res) => {
    
    reservation.findById( req.params.id).then(
        response => {res.json({
            response
        })
    }).catch(error => {res.json({
        message : 'Reservation not found'
    })
    })
}

const AddReservation = (req,res) => {
    let newreservation = new reservation({
        dateAller : req.body.dateAller,
        dateRetour : req.body.dateRetour,
        nbrPersonnes : req.body.nbrPersonnes,
        paysDepart : req.body.paysDepart,
        destination : req.body.destination,
        moyenTransport : req.body.moyenTransport,
        allogement : req.body.allogement,
        prixTotal : req.body.prixTotal
    })
    newreservation.save().then( response => {res.json({
        response
    })
    }).catch(error => {res.json({
        message : 'reservation not added'
    })
    })
}

const UpdateReservation = (req,res,next) =>{
    let updatereservation = {
        dateAller : req.body.dateAller,
        dateRetour : req.body.dateRetour,
        nbrPersonnes : req.body.nbrPersonnes,
        paysDepart : req.body.paysDepart,
        destination : req.body.destination,
        moyenTransport : req.body.moyenTransport,
        allogement : req.body.allogement,
        prixTotal : req.body.prixTotal
    }
    reservation.findByIdAndUpdate(req.params.id,{$set : updatereservation} ).then( response => {res.json({
        message : 'Updated'
    })
    }).catch(error => {res.json({
        message : 'reservation not updated'
    })
    })
}

const DeleteReservation = (req,res) =>{
    reservation.findByIdAndRemove(req.params.id).then(response => {res.json({
        message : 'Deleted'
    })
    }).catch(error => {res.json({
        message : 'reservation not deleted'
    })
    })
}

module.exports = { GetReservation , GetReservationById ,AddReservation , UpdateReservation , DeleteReservation}