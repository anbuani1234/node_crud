var express=require ('express')
var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var userschema=new Schema({
    name :String

})
var user =mongoose.model('user',userschema);
module.exports=user;