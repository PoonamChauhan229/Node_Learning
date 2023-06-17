const express=require('express')
const User=require('../model/userModel')
const router=new express.Router()
router.get('/test',(req,res)=>{
    res.send("New Route")
})
router.post('/users',async (req,res)=>{
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
router.get('/users',async (req,res)=>{
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
router.get('/users/:id',async (req,res)=>{
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
router.patch('/users/:id',async(req,res)=>{
   
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
router.delete('/users/:id',async(req,res)=>{
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
module.exports=router