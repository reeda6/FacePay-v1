const express =require ('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const bodyParser=require('body-parser');//dont forget middlwares wired up by app.use
const keys=require('./config/keys');
require('./models/User');
require('./services/passport');//make sure after models/user


mongoose.connect(keys.mongoURI);

const app=express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//client id: 450701265653-34bhdhvl2km873rc2o7dbg44o2bn1ndg.apps.googleusercontent.com
//client secret: zVokQkJ4JAiZb3gXB_ENsL_G
require('./routes/authRoutes')(app);//special JS syntax..calling a func w app
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV==='production')//set by heroku
{
  app.use(express.static('client/build'));//this serves the main.js and .css

  //if we dont know what route is, just serve up html document
  const path=require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
  });

}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
