const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//^is equal to const {schema}=mongoose;

//can use type of field or use obj to give more
const userSchema=new Schema({
  googleId: String,
  credits: {type:Number, default:0}
});

mongoose.model('users',userSchema);
