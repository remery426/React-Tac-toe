const mongoose = require('mongoose');
const passport =  require('passport');
var user = require('../controllers/userController.js');
module.exports = function(app){

  app.get('/auth/google',
  passport.authenticate('google',{
  scope: ['profile','email']
})
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
  console.log("hit route")
  res.send(req.user);
})
app.post('/api/updateRecord',(req,res)=>{

  user.updateRecord(req,res)
})

}
