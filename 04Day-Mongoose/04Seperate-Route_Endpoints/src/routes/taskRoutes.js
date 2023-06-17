const express=require('express')
const router=new express.Router()
const Task=require('../model/taskModel')

// Task
router.post('/task',async (req,res)=>{
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
router.get('/task',async (req,res)=>{
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
router.get('/task/:id',async (req,res)=>{
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
router.patch('/task/:id',async (req,res)=>{
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
router.delete('/task/:id',async(req,res)=>{
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

module.exports=router;