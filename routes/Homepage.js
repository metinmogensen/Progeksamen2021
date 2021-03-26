const express = require('express')
const router = express.Router();
const path = require('path');
const registerData = require('./register')


router.get('/', (req, res,) => {
    console.log('userlist', registerData.users);
    res.sendFile(path.resolve(__dirname,'..','veiws','homepage.html'));
    });
    
module.exports = router; 