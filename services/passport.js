const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys');
const mongoose=require('mongoose');

const User=mongoose.model('users');//fetching

passport.serializeUser((user,done)=>{//generates user identifying token that is stuck in cookie
  //also note, passing function to serializeUser
  done(null,user.id);//not google profile id but mongo id
});

passport.deserializeUser((id, done)=>{//turns token back into user profile
  User.findById(id)
  .then(user=>{
    done(null,user);
  })
});

passport.use(new GoogleStrategy({
  clientID:keys.googleClientID,
  clientSecret:keys.googleClientSecret,
  callbackURL:'/auth/google/callback',//route user sent to once granted permission
  proxy:true
},
async (accessToken, refreshToken, profile, done)=>{
  const existingUser=await User.findOne({googleId:profile.id});//checks if can find one entry
  //however it is a query and returns a promise

      if(existingUser){
        //we already have a record w given profile id
        done(null,existingUser);//error code, user record
      }
      else{
        //create new record
          const user =await new User({googleId:profile.id}).save();
          done(null,user);
      }
    })
  //console.log(accessToken,'AHHHHHHHHAAAA');
);//googles service needs id and
