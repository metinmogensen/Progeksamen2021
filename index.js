const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express() 

const registerData = require('./routes/register')
const Homepage = require('./routes/Homepage')

app.use(bodyParser.urlencoded({extended:false}))

app.use(registerData.routes);

app.use(Homepage);


app.listen(3000)

