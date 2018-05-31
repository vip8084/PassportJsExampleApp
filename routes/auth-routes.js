const router = require('express').Router(); //create an instance of router
const passport = require('passport');

router.get('/login', (req, res)=>{
    res.render('login'); // login page
});

router.get('/logout', (req, res)=>{
    res.send('logging out');
});

router.get('/google', passport.authenticate('google', {
    scope:['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google'), (req,res)=>{
    res.send('test');
});

module.exports = router;
