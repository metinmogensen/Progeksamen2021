const express = require('express')
const path = require('path')

app.use(bodyParser.urlencoded({extended:fal}))

const app = express() 

app.get('/register', (req, res,) => {
    res.sendFile(path.resolve(__dirname,'veiws/register.html'))
    });

app.post('/users/regiser', (req, res,) => {
    console.log(req.body);
    res.redirect('/register')
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


