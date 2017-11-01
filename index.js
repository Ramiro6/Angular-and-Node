'use strict'
const express = require('express')
const mongoose = require('mongoose')
const body = require('body-parser')
const app = express()

app.use(body.urlencoded({ extended: false }))
app.use(body.json())


// routes
const controller = require('./controllers/elements')


app.get('/api/', controller.getAll);
app.post('/api/new', controller.postnewWork);



const port = process.env.PORT || 3000



mongoose.connect('mongodb://localhost:27017/test', (err, res) => {
    if(err) { throw err }
    console.log('DATA BASE ON')
    app.listen(port, () => {
        console.log(`API RES IN LOCALHOST: ${port}`);
    });
});