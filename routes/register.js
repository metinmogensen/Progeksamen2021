const express = require('express');
const path = require('path');
const users = [];

const router = express.Router();

router.post('/posttest', (req, res ) => {
    users.push({ username: req.body.username, password: req.body.password});
     res.redirect('/');
     });

router.get('/register', (req, res) => {
    //res.send('<form action="/posttest" method="post"><input type="text" name="username" placeholder="Username"><input type="text" name="password" placeholder="Password"><button type="submit">Add user</form>')
    res.sendFile(path.resolve(__dirname,'/Users/metinyucel/Desktop/Progeksamen2021/Progeksamen2021/veiws/register.html'));
    });


exports.routes = router;
exports.users = users;
