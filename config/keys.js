if(process.env.NODE_ENV==='production'){//if production, this happens on heroku
  //production
  module.exports=require('./prod');
}else{
  //development-return dev keys
  module.exports=require('./dev');
}
