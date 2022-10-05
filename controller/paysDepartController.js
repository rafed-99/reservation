const paysDepart = require('../models/paysDepart');

const GetPaysDepart = (req,res) => {
    paysDepart.find().then(response => {res.json({
        response
    })
    }).catch( error => {res.json({
        message : 'Error'
    })
    })
}

const GetPaysDepartById = (req,res) => {
    
    paysDepart.findById(req.params.id).then( response => {res.json({
        response
    })
    }).catch(error => { res.json({
        message : 'Error pays depart not found'
    })
    })
}

const AddPaysDepart = (req,res) => {
    let newPaysDepart = new paysDepart({
        nomPaysDepart : req.body.nomPaysDepart,
        abbreviationPaysDepart : req.body.abbreviationPaysDepart,
    })
    newPaysDepart.save().then( response => { res.json({
        response
    })
    }).catch(error => { res.json({
        message : 'Error pays depart not added'
    })
    })
}

const UpdatePaysDepart = (req,res) => {
    let updatePaysDepart = {
        nomPaysDepart : req.body.nomPaysDepart,
        abbreviationPaysDepart : req.body.abbreviationPaysDepart,
    }
    paysDepart.findByIdAndUpdate(req.params.id,{$set:updatePaysDepart}).then( response => { res.json({
        message : 'updated'
    })
    }).catch( error => { res.json({
        message : 'error pays depart not updated'
    })
    })
}

const DeletePaysDepart = (req,res) => {
    paysDepart.findByIdAndRemove(req.params.id).then( response => { res.json({
        message : 'Deleted'
    })
    }).catch( error => { res.json({
        message : 'Error pays depart not deleted'
    })
    })
}

module.exports = { GetPaysDepart,GetPaysDepartById,AddPaysDepart,UpdatePaysDepart,DeletePaysDepart}
