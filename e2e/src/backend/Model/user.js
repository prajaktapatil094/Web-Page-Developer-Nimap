const mongoose = require("mongoose");
const { type } = require("node:os");
const Schema = mongoose.Schema;
//monggose 

let user=new Schema(
{
    user_First_Name:{
     type:String,
    },
    user_Last_Name:{
        type:String,
       },
    user_Email:{
        type:String,
       },
    user_Age:{
        type:String,
       },
    user_country:{
        type:String,
       },
    user_State:{
        type:String,
       },
    user_Tags:{
        type:String,
    }
       },
       {
           collection:'user'
       
    })
mongoose.exports=mongoose.model('user',user)
      

