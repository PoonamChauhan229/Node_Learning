const validator=require('validator')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/taskmanager-mongoose-local',{
    useNewUrlParser:true
})
//Define a Schema

const Task=mongoose.model("Task",{
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})
// create an instance
const taskData=new Task({
    description:"Mongoose Validation timestamp",
    completed:true

})

// save to DB
taskData.save().then(taskData=>console.log(taskData)).catch(err=>console.log(err))