const mongoose=require('mongoose')
const validator=require('validator')
//Define the model
const User=mongoose.model('User',{
    
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            validate(value){
                if(value<0){
                    throw new Error("Age must be a positive number")
                }
            },
            default:0
        },
        email:{
            type:String,
            lowercase:true,
            trim:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email Invalid")
                }
            }
        },
        password:{
            type:String,
            minLength:6,
            required:true,
            trim:true,
            validate(value){
                if(value.includes("password")){
                    throw new Error("Password should not contain password")
                }
            }
        }

})
module.exports=User;