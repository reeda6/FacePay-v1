const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys');
const mongoose=require('mongoose');

const User=mongoose.model('users');//fetching

passport.serializeUser((user,done)=>{
  done(null,user.id);//not google profile id but mongo id
});

passport.deserializeUser((id, done)=>{
  User.findById(id)
  .then(user=>{
    done(null,user);
  })
});

passport.use(new GoogleStrategy({
  clientID:keys.googleClientID,
  clientSecret:keys.googleClientSecret,
  callbackURL:'/auth/google/callback'//route user sent to once granted permission
},(accessToken, refreshToken, profile, done)=>{
  User.findOne({googleId:profile.id})//checks if can find one entry
  //however it is a query and returns a promise
    .then((existingUser)=>{
      if(existingUser){
        //we already have a record w given profile id
        done(null,existingUser);//error code, user record
      }
      else{
        //create new record
        new User({googleId:profile.id}).save()
          .then(user=>done(null,user));
      }
    })
  //console.log(accessToken,'AHHHHHHHHAAAA');
}));//googles service needs id and
