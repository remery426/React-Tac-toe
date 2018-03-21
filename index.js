const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();
require('./config/mongoose.js')
require('./controllers/passport');
require('./models/User');


app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize());
app.use(passport.session());
require('./routes/routes')(app);



if(process.env.NODE_ENV === 'production'){
  console.log("prop")
  app.use(express.static('main/build'));
  const path  = require('path');
  app.get('*',(req,res)=>{
    console.log("route not found" + req.body)
    res.sendFile(path.resolve(__dirname, 'main', 'build', 'index.html'))
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("server running on " + PORT)
});
