const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  username: String,
  wins: {type:Number,default:0},
  ties: {type:Number,default:0},
  losses: {type:Number,default:0},
  easy: {type:Number,default:0},
  normal: {type:Number,default:0},
  hard: {type:Number,default:0},
})
 mongoose.model('users',userSchema)
