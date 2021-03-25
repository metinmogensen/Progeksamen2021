const express = require('express')
const router = express.Router();
const path = require('path');


router.get('/', (req, res,) => {
    res.sendfile(path.resolve(__dirname,'/Users/metinyucel/Desktop/Progeksamen2021/Progeksamen2021/veiws/homepage.html'))
    });
    
module.exports = router; 