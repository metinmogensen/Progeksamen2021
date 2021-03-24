const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/register', (req, res, next) => {
    res.sendFile(path.resolve(__dirname,'/Users/metinyucel/Desktop/Progeksamen2021/Progeksamen2021/veiws/register.html'));
    });

router.post('/users/regiser', (req, res ) => {
    console.log(req.body);
    res.redirect('/');
    });
    
module.exports = router;
