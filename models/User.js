const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//^is equal to const {schema}=mongoose;

const userSchema=new Schema({
  googleId:String
});

mongoose.model('users',userSchema);
