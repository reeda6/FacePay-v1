//lowercase r for function
module.exports=(req,res,next)=>{//next passes to next middleware in chin
  if(!req.user){//if not logged in
    return res.status(401).send({error:'You must log in!'});
  }
  next();
};
