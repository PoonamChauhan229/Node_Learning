const mongoose=require('mongoose')
const validator=require('validator')
// create the schema and pass it on to the model
// 1 line we need to add known as a schema in order to take advantage of the middleware functionality.

// pass to it the object which defines all the properties for that schema.
const bcrypt=require('bcryptjs')
const userSchema=new mongoose.Schema({
    
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

// pre takes 2 args 
    // > name of the event
    // > function to run and it should be an standard function, this takes next as an parameter 
    //not an arrow function
    //Binding place an important role
    // arrow function here dont bind this
userSchema.pre('save',async function(next){
    //"this" refers and gives us access to the individual user that's about to be saved.
    const user=this
    // next
    //The whole point of this is to run some code before a user is saved
    //But how does it know when we're done running our code.
    //Now it could just say when the function is over.
   // But that wouldn't account for any asynchronous process which might be occurring.So that's why next is provided.We simply call next when we're done right here.we call next at the end of the function.
   //Now if we never call next.It's just going to hang forever.Thinking that we're still running some code before we save the user and it will never actually save the user.

    //In between the this and next , we are going to hash the password
    //fire off from postman and check the below message 
    console.log('just before saving',user)
    //create user, its working but in update user not working
    //so we will have to restructure the update user route.
    //Restructing done for update user route so now we will start hashing of the password.
    
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
   next();
})
//Define the model
const User=mongoose.model('User',userSchema)
module.exports=User;