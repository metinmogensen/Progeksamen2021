const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
PORT = 3000;

const app = express() 
// parse application/x-www-form-urlencoded

// parse application/json

app.use(bodyParser.json({ extended: false }));

app.use("/register", (req,res, next) => {
  res.sendFile(__dirname+ "/views/register.html")
  next 
});



// // Register
// app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/register', (req, res) => {  
//   res.response("hello this is register");
// });


app.listen(PORT, () => console.log('server started skirt'));







