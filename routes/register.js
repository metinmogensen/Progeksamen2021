const express = require('express');

const router = express.Router();

router.get('/register', (req, res, next) => {
    res.sendFile(path.resolve(__dirname,'veiws/register.html'));
    });

router.post('/users/regiser', (req, res ) => {
    console.log(req.body);
    res.redirect('/');
    });
    
module.exports = router
