const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/taskmanager-mongoose-local",{
    useNewUrlParser:true
})

// model
const Task=mongoose.model("Task",{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

// create an instance
const taskData=new Task({
    description:"Test the Work!!!",
    completed:true
})

// save to db
taskData.save().then((taskData)=>{
    console.log(taskData)
}).catch((err)=>console.log(err))
