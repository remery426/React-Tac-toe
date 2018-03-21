var mongoose = require('mongoose');
var User = mongoose.model('users');
module.exports = (function(){
  return{
    updateRecord: async function(req,res){
      console.log(req.body)
      if(req.body.difficulty === 'Easy'){
        req.user.easy+=1
      }
      if(req.body.difficulty === 'Normal'){
        console.log("hi")
        req.user.normal+=1
      }
      if(req.body.difficulty === 'Hard'){
        req.user.hard+=1
      }
      if(req.body.result ==='Win'){
        console.log("hi buddy")
        req.user.wins+=1
      }
      if(req.body.result === 'Loss'){
        req.user.losses+=1
      }
      if(req.body.result === 'Tie'){
        req.user.ties+=1
      }
      const user = await req.user.save()
      res.send(req.user)
  }
}
})()
