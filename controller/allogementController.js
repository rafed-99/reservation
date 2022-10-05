const allogement = require('../models/Allogement');

const GetAllogement =(req,res) => {
    allogement.find().then( response => { res.json (response)}).catch( error => {res.json({
        message : 'Error'
    })
    })
}



const GetAllogementById = (req,res) => {
    
    allogement.findById(req.params.id).then( response => {res.json({
        response
    })
    }).catch(error => { res.json({
        message : 'Error pays depart not found'
    })
    })
}



const AddAllogement = (req,res) => {
    let newAllogement = new allogement({ nomAllogement : req.body.nomAllogement,
        etoiles : req.body.etoiles,
        prixUnitaireAllogement : req.body.prixUnitaireAllogement,
    })
    newAllogement.save().then( response => { res.json({
        response
    })
    }).catch(error => { res.json({
        message : 'Error pays depart not added'
    })
    })
}



const UpdateAllogement = (req,res) => {
    let updateAllogement = {
        nomAllogement : req.body.nomAllogement,
        etoiles : req.body.etoiles,
        prixUnitaireAllogement : req.body.prixUnitaireAllogement,
    }
    allogement.findByIdAndUpdate(req.params.id,{$set:updateAllogement}).then( response => { res.json({
        message : 'updated'
    })
    }).catch( error => { res.json({
        message : 'error pays depart not updated'
    })
    })
}

const DeleteAllogment = (req,res) => {
    allogement.findByIdAndDelete(req.params.id).then(response => { res.send({
        message: 'Deleted'
    })
    }).catch( error => {res.send({
        message: 'Not Deleted'
    })
    })
}

module.exports = {GetAllogement,GetAllogementById,AddAllogement,UpdateAllogement,DeleteAllogment}