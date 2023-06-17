// Refactoring it and put it into index.js
require('./db/mongoose_async')
const User=require('./model/userModel')
const Task=require('./model/taskModel')

// Routing
const express=require('express')
const app=express()
const PORT=process.env.PORT || 3000

app.use(express.json())
app.post('/users',async (req,res)=>{
   // res.send('testing')
    // How we will send the other necessary fields name, password age from client to server
    // So we send the JSON data in request.body
    // POstman gives us a way to configure that, lets see
    // switch to body in POstman> raw> JSON
    // Now the space , we shall pass the data over there.
    // {
    //      "name":"Shivam",
    //      "email":"shivam@gmail.com",
    //      "password":"shiv@12347"  
    //  }
    // we see testing , that means that is been sent 
    
    console.log(req.body)
    // creating an user
    const userData=new User(req.body)

    // Using Promise
    // userData.save().then((userData)=>res.status(200).send(userData)).catch(err=>res.status(400).send(err))

    try{
        await userData.save()
        res.status(201).send(userData)
    }catch(e){
        res.status(400).send({message:e})
    }
})

// Get all the Users
app.get('/users',async (req,res)=>{
    // Model.methodname
    // User.find({}).then((users)=>res.status(200).send(users)).catch(err=>res.status(400).send(err))
    
    try{
        const getAllUser=await User.find({})
        res.status(200).send(getAllUser)
    }catch(e){
        res.status(400).send({message:e})
    }
})

//Get Users By ID:
app.get('/users/:id',async (req,res)=>{
    //Model.methodname
    // User.findById(req.params.id).then((users)=>res.status(200).send(users)).catch(err=>res.status(400).send(err))
    try{
        const getUserById=await User.findById(req.params.id)
        if(!getUserById){
            res.status(401).send({message:"User Not Found"})
        }
        res.status(200).send(getUserById)
    }catch(e){
        res.status(400).send({message:e})
    }

}) 

// Updating the Users
// patch
app.patch('/users/:id',async(req,res)=>{
   
    try{
        const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!updateUser){
            res.status(404).send({message:"User Not Found"})
        }
        res.status(200).send(updateUser)

    }catch(e){
        res.status(500).send(e)
    }
})

// Delete By ID
app.delete('/users/:id',async(req,res)=>{
    try{
        const deleteUser=await User.findByIdAndDelete(req.params.id)
        if(!deleteUser){
            res.status(404).send({message:"User Deleted and Not Found"})
        }
        res.status(200).send(deleteUser)
    }catch(e){
        res.status(500).send(e)
    }
})

// Task
app.post('/task',async (req,res)=>{
    const taskData=new Task(req.body)
    //taskData.save().then((taskData)=>res.status(200).send(taskData)).catch(err=>reset.status(400).send(err))
    try{
        await taskData.save()
        res.status(201).send(taskData)
    }catch(e){
        res.status(400).send(e)
    }
})

// Get all the task
app.get('/task',async (req,res)=>{
// Model.methodname
// Task.find({}).then(task=>res.status(200).send(task)).catch(err=>res.status(400).send(err))
try{
    const getAllTask=await Task.find({})
    res.send(getAllTask)
}catch(e){
    res.status(400).send(e)
}

})

// Get Task By ID
app.get('/task/:id',async (req,res)=>{
    //Model.Metodname
    // Task.findById(req.params.id).then((task)=>{
    //     if(!task){
    //         res.status(400).send({message:"Not Found Task"})
    //     }
    //     res.status(200).send(task)}).catch((err)=>res.status(400).send(err))

    try{
        const getTaskByID=await Task.findById(req.params.id)
        if(!getTaskByID){
            res.status(404).send({message:"Not Found Task"})
        }
        res.status(200).send(getTaskByID)
    }catch(e){
        res.status(500).send(e)
    }
})

// UpdateTask By ID
app.patch('/task/:id',async (req,res)=>{
    // if any key value passed which doesnt exit, mongoose ignore so we have to fix it
    const updates=Object.keys(req.body)
    const allowedUpdates=['description','completed']
    const isValidOperations=updates.every((element)=>allowedUpdates.includes(element))
    if(!isValidOperations){
        return res.status(400).send({message:"Invalid Updates!"})
    }
    try{
        const updateTask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        res.status(200).send(updateTask)
    }catch(e){
        res.status(500).send(e)
    }



})
// delete Task
app.delete('/task/:id',async(req,res)=>{
    try{
        const deleteTask=await Task.findByIdAndDelete(req.params.id)
    if(!deleteTask){
        res.status(404).send({message:"Task Deleted and not Found"})
    }
    res.status(200).send(deleteTask)
    }catch(e){
        res.status(500).send(e)
    }
})
app.listen(PORT,()=>{
    console.log('Server started at Port',PORT)
})
