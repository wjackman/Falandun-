var express = require('express');
var router = express.Router();
// var bob = require('../controllers/chessmaster_controller')
// var chessInit = require('chessboardjs')
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("in route");
  
  console.log("{{{{{{{}}}}}}}");
  // var board1 = ChessBoard('board1', 'start');
  res.render('index', { title: "David's first Attempt" });
});

module.exports = router;
