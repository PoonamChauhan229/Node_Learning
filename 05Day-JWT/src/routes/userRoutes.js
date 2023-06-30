const express=require('express')
const User=require('../model/userModel')
const router=new express.Router()
router.get('/test',(req,res)=>{
    res.send("New Route")
})

router.post('/users/login',async (req,res)=>{
   // This is the end point we'll use to log in with the existing account.
   //Now it's the job of this function to find a user by those credentials by the email and the password.
   //create an reusbale function in UserModel.js and use it here.
   try{
    const userLogin=await User.findByCredentials(req.body.email,req.body.password)
    //create token that will be sent to the user
    //async and awit function
    //the below function would be created for specific user not on the UserModel
    const token=await userLogin.generateAuthToken()
    res.status(200).send({userLogin,token})
   }catch(e){
    res.status(400).send(e)
   }
})

// Creating an User Route
router.post('/users',async (req,res)=>{
    console.log(req.body)
    // creating an user
    const userData=new User(req.body)
    

    // Using Promise
    // userData.save().then((userData)=>res.status(200).send(userData)).catch(err=>res.status(400).send(err))

    try{

        await userData.save()
        const token=await userData.generateAuthToken()
    res.status(200).send({userData,token})
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
    const updates=Object.keys(req.body)
    const allowedUpdates=['name','email','password','age']
    const isValidOperations=updates.every((element)=>allowedUpdates.includes(element))
    if(!isValidOperations){
        return res.status(400).send({message:"Invalid Updates!"})
    }
    try{       
        
        //const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        
        // restructung the UpdateUser Route inorder to add the save over here.
        // findByIdAndUpdate direactly/ affects the db and even we have set up the validators to run the validations
       //We will do it it in such a way  that our middleware runs correctly
        //Replace 1 line of code with 3-4 lines of code.
        //Step1: Create the variable and findByID
        const updateUser=await User.findById(req.params.id)
        // Now wehave access to findUser so we have access to User Model as well
        //Step2 : Update the changes done
        //user.name="Some changes Done"=>static way so we will not do like so
        //so we will use the updates which has the keys 
        updates.forEach((element)=>updateUser[element]=req.body[element])
        // [] because the keys are in string format so to access the string key we need to use objname['key']

        // Step3: add the save() over here
        await updateUser.save()
        //let go to hash the password in userModel

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