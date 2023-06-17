const validator=require('validator')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/taskmanager-mongoose-local',{
    useNewUrlParser:true
})

// Define the schema
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

// create an instance
const userData=new User({
    name:"Poonam",
    email:"  POONAM@GMAIL.COM",
    // password:"  123456password"
    password:"123456"
})

// save to DB
userData.save().then(userData=>console.log(userData)).catch(err=>console.log(err))