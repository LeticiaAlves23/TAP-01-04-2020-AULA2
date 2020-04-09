var express = require('express');
var router = express.Router();
 
router.get('/Cadastro', function(req, res, next) {
  if(req.query.fail)
    res.render('Cadastro', { message: 'Falha no cadastro do usuário!' });
  else
    res.render('Cadastro', { message: null });
})

const db = require('../db')
router.post('/Cadastro', function(req, res, next){
  db.createUser(req.body.username, req.body.password, req.body.email, (err, result) => {
    if(err) res.redirect('/Cadastro')
    res.redirect('/')
  })
})
 
module.exports = router;
module.exports = this.apply;