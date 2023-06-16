const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/taskmanager-mongoose-local",{
    useNewUrlParser:true
})

//DEfine the model
// >modelNames
// >defination of model as an object
const User=mongoose.model('User',{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

// create an instance
const userData= new User({
    name:"Andrew",
    age:27
})

// save to Db
userData.save().then(()=>{
    console.log(userData)
}).catch(err=>console.log(err))

// 1 document got inserted  
// database name got added
// we have now 4 fields
// {
//     name: 'Andrew',
//     age: 27,
//     _id: new ObjectId("648cbb62d3e82ebfa5dc8519"),
//     __v: 0
//   }

