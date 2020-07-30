var express = require('express');
var router = express.Router();
var userSchema = require('./user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { session : req.session });
});

router.get('/join', function(req, res, next) {
  res.render('join')
});
//허재 짱 잘해!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.post('/join', function(req, res, next) {
  var bo = req.body
  userSchema.create({
    id: bo.id,
    pw: bo.pw,
    name: bo.name,
    age: bo.age
  },
  function(err, user){
    if (err) return res.status(500).send("User 생성 실패");
    res.status(200).send(user);
  });

});

router.post('/login', function(req, res, next) {
  userSchema.find({"id":req.body.id}, function (err, user) {
    if (err) return res.status(500).send("User 조회 실패");
    if (!user) return res.status(404).send("User 없음." + req.body.id);
    
    req.session.uid = user[0].id;
    req.session.name = user[0].name;
    
    res.redirect('/');
  });
})

router.get('/login', function(req, res, next) {
  res.render('login')
});

router.get('/findid', function(req, res, next) {
  res.render('findid')
});

router.get('/findpw', function(req, res, next) {
  res.render('findpw')
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/')
})

module.exports = router;