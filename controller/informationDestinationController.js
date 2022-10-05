const infoDest = require('../models/informationDestination');

const GetInfo = (req,res) => {
    infoDest.find().then( result => { res.json({result
    })
    }).catch(error => { res.json({
        message : 'Error'
    })
    })
}

const GetInfoById = (req,res) => {
    infoDest.findById(req.params.id).then( result => { res.json({result
    })
    }).catch(error => { res.json({
        message : 'Error moyen not found'
    })
    })
}

const AddInfo = (req,res) =>{
    let newInfoDest = new infoDest ({
        capitale : req.body.capitale,
        population : req.body.population,
        devise : req.body.devise,
    })
    newInfoDest.save().then( result => { res.json ({
        message : 'infor destination added'
    })
    }).catch( error => { res.json({
        message : 'Not added'
    })
    })
}

const UpdateInfo = (req,res) =>{
    let updateInfo = {
        capitale : req.body.capitale,
        population : req.body.population,
        devise : req.body.devise,
    }
    infoDest.findByIdAndUpdate(req.params.id,{$set:updateInfo}).then( result => { res.json ({
        message : 'infor destination updated'
    })
    }).catch( error => { res.json({
        message : 'Not updated'
    })
    })
}

const DeleteInfo = (req,res) => {
    infoDest.findByIdAndRemove(req.params.id).then( result => { res.json({
        message : 'deleted infor destination'
    })
    }).catch( error => { res.json({
        message : 'not deleted'
    })
    })
}

module.exports = {GetInfo,GetInfoById,AddInfo,UpdateInfo,DeleteInfo}

