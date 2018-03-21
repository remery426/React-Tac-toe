const mongoose = require('mongoose');
const passport =  require('passport');
var user = require('../controllers/userController.js');
module.exports = function(app){
app.get('/api/auth/google',
passport.authenticate('google',{
  scope: ['profile','email']
})
);
app.get('/auth/google/callback',
passport.authenticate('google'),
(req,res)=>{
console.log("callback")

  res.redirect('/')
}
);
app.get('/api/logout', (req ,res) =>{
  console.log("logout")
    req.logout();
      res.redirect('/')

})

app.get('/api/current_user', (req, res)=> {
  console.log("current user")
  res.send(req.user);
})
app.post('/api/updateRecord',(req,res)=>{
  console.log("update record")
  user.updateRecord(req,res)
})

}
