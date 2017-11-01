'use strict'
const models = require('../models/newWork')

function getAll(req, res) {
    models.find({}, (err, item) => {
        if(err) return res.status(500).send({message: 'error al tomar el item'})
        if(!item) return res.status(404).send({message: 'no se encuentra el item'})
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({item})
    })

}

function postnewWork(req, res) {
    let element = new models()
    element.name = req.body.name
    element.distancia = req.body.distancia
    element.cercanias = req.body.cercanias
    element.plan = req.body.plan
    element.description = req.body.description

    element.save((err, itssave) => {
        if(err) res.status(500).send({message: 'Error en la base de datos'})
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({message: itssave})
    })
}



module.exports = {
    getAll,
    postnewWork
}