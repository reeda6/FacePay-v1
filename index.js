const express =require ('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys=require('./config/keys');
require('./models/User');
require('./services/passport');//make sure after models/user


mongoose.connect(keys.mongoURI);

const app=express();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
