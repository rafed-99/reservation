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
        message : 'Error allogement not found'
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
        message : 'Error allogement not added'
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
        message : 'error allogement not updated'
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

const SortAllogementAscByPrice = (req,res) =>{
    allogement.find().sort({prixUnitaireAllogement: 1}).then( response => { res.json (response)}).catch( error => {res.json({
        message : 'Error'
    })
    })
}

const SortAllogementDscByPrice = (req,res) =>{
    allogement.find().sort({prixUnitaireAllogement: -1}).then( response => { res.json (response)}).catch( error => {res.json({
        message : 'Error'
    })
    })
}

const SortAllogementAscByEtoile = (req,res) =>{
    allogement.find().sort({etoiles: 1}).then( response => { res.json (response)}).catch( error => {res.json({
        message : 'Error'
    })
    })
}

const SortAllogementDscByEtoile = (req,res) =>{
    allogement.find().sort({etoiles: -1}).then( response => { res.json (response)}).catch( error => {res.json({
        message : 'Error'
    })
    })
}

/*const Filter = (req,res) =>{

    let filter = {};
    if (req.query.etoiles){
        filter = {etoiles : req.query.etoiles.split()};
    }
    allogement.find({filter}).then( response => { res.json (response)}).catch( error => {res.json({
        message : 'Error'
    })
    })
}*/



module.exports = {GetAllogement,GetAllogementById,AddAllogement,UpdateAllogement,DeleteAllogment,SortAllogementAscByPrice,SortAllogementDscByPrice,SortAllogementAscByEtoile,SortAllogementDscByEtoile,/*Filter*/}