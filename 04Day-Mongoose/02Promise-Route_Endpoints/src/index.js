// Refactoring it and put it into index.js
require('./db/mongoose_async')
const User=require('./model/userModel')
const Task=require('./model/taskModel')

// Routing
const express=require('express')
const app=express()
const PORT=process.env.PORT || 3000

app.use(express.json())
app.post('/users',(req,res)=>{
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
    userData.save().then((userData)=>res.status(200).send(userData)).catch(err=>res.status(400).send(err))
})

// Get all the Users
app.get('/users',(req,res)=>{
    // Model.methodname
    User.find({}).then((users)=>res.status(200).send(users)).catch(err=>res.status(400).send(err))
})

//Get Users By ID:
app.get('/users/:id',(req,res)=>{
    //Model.methodname
    User.findById(req.params.id).then((users)=>res.status(200).send(users)).catch(err=>res.status(400).send(err))
}) 

// Task
app.post('/task',(req,res)=>{
    const taskData=new Task(req.body)
    taskData.save().then((taskData)=>res.status(200).send(taskData)).catch(err=>reset.status(400).send(err))
})

// Get all the task
app.get('/task',(req,res)=>{
// Model.methodname
Task.find({}).then(task=>res.status(200).send(task)).catch(err=>res.status(400).send(err))
})

// Get Task By ID
app.get('/task/:id',(req,res)=>{
    //Model.Metodname
    Task.findById(req.params.id).then((task)=>{
        if(!task){
            res.status(400).send({message:"Not Found Task"})
        }
        res.status(200).send(task)}).catch((err)=>res.status(400).send(err))
})

app.listen(PORT,()=>{
    console.log('Server started at Port',PORT)
})
