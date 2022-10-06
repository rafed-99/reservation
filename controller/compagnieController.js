const compagnie = require('../models/Compagnie');

const GetCompagnie =(req,res) => {
    compagnie.find().then( response => { res.json (response)}).catch( error => {res.json({
        message : 'Error'
    })
    })
}



const GetCompagnieById = (req,res) => {
    
    compagnie.findById(req.params.id).then( response => {res.json({
        response
    })
    }).catch(error => { res.json({
        message : 'Error pays depart not found'
    })
    })
}



const AddCompagnie = (req,res) => {
    let newCompagnie = new compagnie({ nomCompagnie : req.body.nomCompagnie,
        prixUnitaireCompagnie : req.body.prixUnitaireCompagnie,
    })
    newCompagnie.save().then( response => { res.json({
        response
    })
    }).catch(error => { res.json({
        message : 'Error pays depart not added'
    })
    })
}



const UpdateCompagnie = (req,res) => {
    let updateCompagnie = {
        nomCompagnie : req.body.nomCompagnie,
        prixUnitaireCompagnie : req.body.prixUnitaireCompagnie,
    }
    compagnie.findByIdAndUpdate(req.params.id,{$set:updateCompagnie}).then( response => { res.json({
        message : 'updated'
    })
    }).catch( error => { res.json({
        message : 'error pays depart not updated'
    })
    })
}

const DeleteCompagnie = (req,res) => {
    compagnie.findByIdAndDelete(req.params.id).then(response => { res.send({
        message: 'Deleted'
    })
    }).catch( error => {res.send({
        message: 'Not Deleted'
    })
    })
}

const SortCompagnieAsc = (req,res) =>{
    compagnie.find().sort({prixUnitaireCompagnie: 1}).then( response => { res.json (response)}).catch( error => {res.json({
        message : 'Error'
    })
    })
}

const SortCompagnieDsc = (req,res) =>{
    compagnie.find().sort({prixUnitaireCompagnie: -1}).then( response => { res.json (response)}).catch( error => {res.json({
        message : 'Error'
    })
    })
}

module.exports = {GetCompagnie,GetCompagnieById,AddCompagnie,UpdateCompagnie,DeleteCompagnie,SortCompagnieAsc,SortCompagnieDsc}