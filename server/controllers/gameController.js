var mongoose = require('mongoose');
var Game = mongoose.model('Game');
 module.exports = (function(){
   return {
     getGames : function (req, res){
       Game.find({}, function(err,data){
         if(err){
           res.send(err)
         }
         else{
           res.send(data)
         }
       })
     },
     createGame : function(req,res){
       var game  = new Game(req.body);
       game.save(function(err,data){
         if(err){
           res.send(err)
         }
         else{
           res.send(data)
         }
       })

     }
   }
 })()
