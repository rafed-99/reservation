const moyen = require('../models/moyenTransport');

const GetMoyen = (req,res) => {
    moyen.find().then( result => { res.json({result
    })
    }).catch(error => { res.json({
        message : 'Error'
    })
    })
}

const GetMoyenById = (req,res) => {
    moyen.findById(req.params.id).then( result => { res.json({result
    })
    }).catch(error => { res.json({
        message : 'Error moyen not found'
    })
    })
}

const AddMoyen = (req,res) =>{
    let newMoyen = new moyen ({
        typeMoyen : req.body.typeMoyen,
        compagnie : req.body.compagnie
    })
    newMoyen.save().then( result => { res.json ({
        message : 'moyen added'
    })
    }).catch( error => { res.json({
        message : 'Not added'
    })
    })
}

const UpdateMoyen = (req,res) =>{
    let updateMoyen = {
        typeMoyen : req.body.typeMoyen,
        compagnie : req.body.compagnie
    }
    moyen.findByIdAndUpdate(req.params.id,{$set:updateMoyen}).then( result => { res.json ({
        message : 'moyen updated'
    })
    }).catch( error => { res.json({
        message : 'Not updated'
    })
    })
}

const DeleteMoyen = (req,res) => {
    moyen.findByIdAndRemove(req.params.id).then( result => { res.json({
        message : 'deleted moyen'
    })
    }).catch( error => { res.json({
        message : 'not deleted'
    })
    })
}

module.exports = {GetMoyen,GetMoyenById,AddMoyen,UpdateMoyen,DeleteMoyen}

