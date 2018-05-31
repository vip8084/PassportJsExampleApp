const router = require('express').Router(); //create an instance of router

router.get('/login', (req, res)=>{
    res.render('login'); // login page
});

router.get('/logout', (req, res)=>{
    res.send('logging out');
});

router.get('/google', (req, res)=>{
    res.send('logging in with google');
});

module.exports = router;
