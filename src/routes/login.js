const express = require('express');
const { render } = require('timeago.js');
const router = express.Router();

router.get('/',(req,res)=>{
 res.render('Paginas/login')
});

module.exports = router;