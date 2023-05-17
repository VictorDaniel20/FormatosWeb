const express = require('express');
const { render } = require('timeago.js');
const router = express.Router();

router.get('/Principal',(req,res)=>{
 res.render('Paginas/consulta')
});
module.exports = router;