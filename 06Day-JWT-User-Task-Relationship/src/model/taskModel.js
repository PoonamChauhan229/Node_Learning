const mongoose=require('mongoose')
const validator=require('validator')

const Task=mongoose.model("Task",{
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'//MOdel Name
    }
    //We will get the object id who was authenticated.
    //This is going to be the piece of data that links tasks to their owner
    
})

module.exports=Task