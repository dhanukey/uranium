const express = require('express');
const a = require('../logger')
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(a.u)

});

module.exports = router;
// adding this comment for no reason