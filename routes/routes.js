const mongoose = require('mongoose');
const passport =  require('passport');
var user = require('../controllers/userController.js');
module.exports = function(app){

  app.get('/auth/google',
  passport.authenticate('google',{

  scope: ['profile','email']
})
console.log("login")
);
app.get('/auth/google/callback',
passport.authenticate('google'),
(req,res)=>{
  res.redirect('/')
}
);
app.get('/api/logout', (req ,res) =>{
    req.logout();
      res.redirect('/')

})

app.get('/api/current_user', (req, res)=> {
  console.log("current user route")
  res.send(req.user);
})
app.post('/api/updateRecord',(req,res)=>{
  console.log("update record")
  user.updateRecord(req,res)
})

}
