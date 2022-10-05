const destination = require('../models/destination');

const GetDestination = (req,res) => {
    destination.find().then( result => { res.json({result
    })
    }).catch(error => { res.json({
        message : 'Error'
    })
    })
}

const GetDestinationById = (req,res) => {
    destination.findById(req.params.id).then( result => { res.json({result
    })
    }).catch(error => { res.json({
        message : 'Error destination not found'
    })
    })
}

const AddDestination = (req,res) =>{
    let newDestination = new destination ({
        nomDestination : req.body.nomDestination,
        abbreviationDestination : req.body.abbreviationDestination,
        informationDestination : req.body.informationDestination,
        monuments : req.body.monuments
    })
    newDestination.save().then( result => { res.json ({
        message : 'destination added'
    })
    }).catch( error => { res.json({
        message : 'Not added'
    })
    })
}

const UpdateDestination = (req,res) =>{
    let updateDestination = {
        nomDestination : req.body.nomDestination,
        abbreviationDestination : req.body.abbreviationDestination,
        informationDestination : req.body.informationDestination,
        monuments : req.body.monuments
    }
    destination.findByIdAndUpdate(req.params.id,{$set:updateDestination}).then( result => { res.json ({
        message : 'destination updated'
    })
    }).catch( error => { res.json({
        message : 'Not updated'
    })
    })
}

const DeleteDestination = (req,res) => {
    destination.findByIdAndRemove(req.params.id).then( result => { res.json({
        message : 'deleted destination'
    })
    }).catch( error => { res.json({
        message : 'not deleted'
    })
    })
}

module.exports = {GetDestination,GetDestinationById,AddDestination,UpdateDestination,DeleteDestination}

