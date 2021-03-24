const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express() 

app.use(bodyParser.urlencoded({extended:false}))

app.use('/register', (req, res, next) => {
    res.sendFile(path.resolve(__dirname,'veiws/register.html'));
    });

app.use('/users/regiser', (req, res ) => {
    console.log('Hello');
    res.redirect('/');
    });
    

app.use('/', (req, res,) => {
    console.log('Startside')
    res.send('<h1> Hello fra Express<h1>')
    });
    
app.listen(3000)

