const express = require('express')
const path = require('path')

const app = express()
app.get('/register', (req, res,) => {
    res.sendFile(path.resolve(__dirname,'veiws/register.html'))
    });

app.get('/login', (req, res, next) => {
    console.log('in another middleware');
    res.send('<h1> Hello fra Express<h1>')
    });

app.get('/', (req, res, next) => {
    console.log('in another middleware');
    res.send('<h1> Hello fra Express<h1>')
    });
    

app.listen(3000)


