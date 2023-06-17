// Require the validator 
const validator=require('validator')
const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/taskmanager-mongoose-local",{
    useNewUrlParser:true
})

//Define model
//basic validation
const User=mongoose.model("User",{
    name:{
        type:String,
        // mongoose validation added required
        required:true,
        trim:true
    },
    age:{
        type:Number,
        // mongoose validation added default
        default:0,
        trim:true,
        // user cant enter -ve age
        validate(value){
            if(value<0)
            throw new Error('Age must be an positive number')
        }
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email Address Not valid")
            }
        },
        minLength:12
    }
})
// create an instance
const userData=new User({
    name:"  Andrew120  ",
    email:"ANDRE120@GMAIL.com"
})
//save to Database
userData.save().then((userData)=>console.log(userData)).catch((err)=>console.log(err))

// {
//     name: 'Andrew120',
//     age: 0,
//     email: 'andre120@gmail.com',
//     _id: new ObjectId("648d35f2c2f004634dda70bc"),
//     __v: 0
//   }

// spaces removed
// default : 0 
// lowercase email done.