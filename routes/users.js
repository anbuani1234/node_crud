var express = require('express');
var router = express.Router();
var usermodel=require('./usermodel')

/* GET users listing. */
router.get('/all', function(req, res, next) {
 
  usermodel.find({}).then((err,result)=>{
    if(err){
    res.send(err)}
    else{
    res.send(result)
    }
  })
})
  router.post('/add',function(req,res,next){
let userobj=req.body;
console.log("userdata",userobj)
let user=new usermodel(userobj);
user.save().then((err,result)=>{
  if(err){
    res.send(err)}
    else{
    res.send(result)
    }
})

  
});
router.put('/update',function(req,res,next){
var id=req.body._id;
var obj=req.body;
usermodel.findByIdAndUpdate(id,{name:obj.name},{new:true}).then((err,result)=>{
  if(err){
    res.send(err)}
    else{
    res.send(result)
    }
})

})
router.delete('/delete',function(req,res,next){
  var id=req.body._id;
  var obj=req.body;
  usermodel.findByIdAndRemove(id).then((err,result)=>{
    if(err){
      res.send(err)}
      else{
      res.send(result)
      }
  })
  
  })
  

module.exports = router;
