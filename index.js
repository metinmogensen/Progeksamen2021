const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')
PORT = 3000;


const app = express() 

/*
const registerData = require('./routes/register')
const Homepage = require('./routes/Homepage')

app.use(bodyParser.urlencoded({extended:false}))

app.use(registerData.routes);

app.use(Homepage);
*/

// Register
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/register', (req, res) => {  
  res.response("hello this is register");
});


app.listen(PORT, () => console.log('server started skirt'));







