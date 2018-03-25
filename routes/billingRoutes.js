const keys=require('../config/keys');
const stripe =require('stripe')(
  keys.stripeSecretKey
);
const requireLogin=require('../middlewares/requireLogin');
//need body parser to parse post request and make info available to rest of app

module.exports=app=>{
  app.post('/api/stripe', requireLogin, async (req, res)=>{
      // if(!req.user){//if not logged in
      //   return res.status(401).send{error:'You must log in!'};
      // }


      const charge=await stripe.charges.create({
        amount:500,
        currency:'usd',
        description:'$5 for 5 credits',
        source:req.body.id,
      });

      //this exists from passport init and session calls in index.js
      req.user.credits+=5;
      const user= await req.user.save();//this user is seperate obj in mem
      res.send(user);
  });
};
