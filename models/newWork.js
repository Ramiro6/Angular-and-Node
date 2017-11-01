'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const newWork = Schema({
    name: String,
    distancia: String,
    cercanias: String,
    plan: String,
    description: String
})

module.exports = mongoose.model('item', newWork )