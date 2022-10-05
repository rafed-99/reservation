const monument = require('../models/monument');

const GetMonument = (req,res) => {
    monument.find().then( result => { res.json({result
    })
    }).catch(error => { res.json({
        message : 'Error'
    })
    })
}

const GetMonumentById = (req,res) => {
    monument.findById(req.params.id).then( result => { res.json({result
    })
    }).catch(error => { res.json({
        message : 'Error moyen not found'
    })
    })
}

const AddMonument = (req,res) =>{
    let newMonument = new monument ({
        nomMonument : req.body.nomMonument,
    })
    newMonument.save().then( result => { res.json ({
        message : 'monument added'
    })
    }).catch( error => { res.json({
        message : 'Not added'
    })
    })
}

const UpdateMonument = (req,res) =>{
    let updateMonument = {
        nomMonument : req.body.nomMonument,
    }
    monument.findByIdAndUpdate(req.params.id,{$set:updateMonument}).then( result => { res.json ({
        message : 'monument updated'
    })
    }).catch( error => { res.json({
        message : 'Not updated'
    })
    })
}

const DeleteMonument = (req,res) => {
    monument.findByIdAndRemove(req.params.id).then( result => { res.json({
        message : 'deleted monument'
    })
    }).catch( error => { res.json({
        message : 'not deleted'
    })
    })
}

module.exports = {GetMonument,GetMonumentById,AddMonument,UpdateMonument,DeleteMonument}

