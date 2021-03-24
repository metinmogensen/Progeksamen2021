const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express() 

const registerRoutes = require('./routes/register')

app.use(bodyParser.urlencoded({extended:false}))

app.use(registerRoutes);

app.use('/', (req, res,) => {
    res.send('<h1> Hello fra Express<h1>')
    });
    
app.listen(3000)

