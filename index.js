const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express() 

const registerRoutes = require('./routes/register')
const Homepage = require('./routes/Homepage')

app.use(bodyParser.urlencoded({extended:false}))

app.use(registerRoutes);

app.use(Homepage);


app.listen(3000)

