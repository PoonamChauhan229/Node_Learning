// Middileware
// We can add to the individual route
// We will pass auth as an 2nd parameter to it.
// lets add it to get all users route and test
// in other routes, you wont get the console.log message beacause they dont use the middleware.
const auth=require('../middleware/auth')
const Task=require('../model/taskModel')
const express=require('express')
const User=require('../model/userModel')
const multer=require('multer')
const router=new express.Router()
router.get('/test',(req,res)=>{
    res.send("New Route")
})

//login
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

//signup route
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
    //res.status(200).send({userData,token})
        res.status(201).send({userData,token})
    }catch(e){
        res.status(400).send({message:e})
    }
})

//logout route
router.post('/users/logout',auth,async(req,res)=>{
    try{
        // console.log("logout route")
        // console.log(req.user.tokens.filter((token)=>{
        //     console.log( token.token!==req.token)}))
        // The below filter method returns false and hence it has an empty array
        // tokens are empty
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token!==req.token
        
        })

        await req.user.save()
        res.send({message:"User Logged Out Successfully"})
    }catch(e){
        res.status(500).send()
    }
})

//logout all from all the sessions
// Mutilple systems logout
router.post('/users/logoutall',auth,async(req,res)=>{
    try{
        req.user.tokens=[]
        await req.user.save()
        res.send({message:"User Logged Out From all the sessions Successfully"})
    }catch(e){
        res.status(500).send()
    }
})

// Get all the Users
//And the problem is that it exposes the data for other users.
//So this route, doesnt any purpose anymore but we are going to repurpose it for something
//change the route '/users/me'
// get the profile of the user
router.get('/users/me',auth,async (req,res)=>{
       
    try{
        res.status(200).send(req.user)
    }catch(e){
        res.status(400).send({message:e})       
    }
})

//Get Users By ID: Not need because this is what '/users/me'
// router.get('/users/:id',async (req,res)=>{
//     //Model.methodname
//     // User.findById(req.params.id).then((users)=>res.status(200).send(users)).catch(err=>res.status(400).send(err))
//     try{
//         const getUserById=await User.findById(req.params.id)
//         if(!getUserById){
//             res.status(401).send({message:"User Not Found"})
//         }
//         res.status(200).send(getUserById)
//     }catch(e){
//         res.status(400).send({message:e})
//     }

// }) 

// Updating the all the Users
// which shouldnt be case 
// patch
router.patch('/users/me',auth,async(req,res)=>{
    const updates=Object.keys(req.body)
    const allowedUpdates=['name','email','password','age']
    const isValidOperations=updates.every((element)=>allowedUpdates.includes(element))
    if(!isValidOperations){
        return res.status(400).send({message:"Invalid Updates!"})
    }
    try{       
        
        // const updateUser=await User.findById(req.params.id)
        updates.forEach((element)=>req.user[element]=req.body[element])
        // [] because the keys are in string format so to access the string key we need to use objname['key']

        // Step3: add the save() over here
        await req.user.save()
        //let go to hash the password in userModel

        res.status(200).send(req.user)
    
    }catch(e){
        res.status(500).send(e)
    }
})

// Delete By ID
router.delete('/users/me',auth,async(req,res)=>{
    try{
         // route chnaged so we cant get req.params.id

         // 1st way:
     const deleteUser=await User.findOneAndDelete({_id:req.user._id})

         // const deleteUser=await User.findByIdAndDelete(req.params.id)
        if(!deleteUser){
            res.status(404).send({message:"User Deleted and Not Found"})
        }
         // Delete associated tasks
        await Task.deleteMany({ owner:deleteUser._id });
        res.status(200).send(deleteUser)
    }catch(e){
        res.status(500).send({message:"Error"})
    }

});

//Uploading images

const upload=multer({
    dest:"avatars",
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        //we want to look for the file extensions which are being uploaded
        //npm multer
        //Api=> originalname
        //Now, if the file is an Pdf => No error
        // if(!file.originalname.endsWith('.pdf')){
            if(!file.originalname.match(/\.(doc|docx|jpg)$/)){
            return cb(new Error('file must be an word'))
        }
        //error
        // cb(new Error('file must be an PDF'))
        //accept the file
        cb(undefined,true)
    }   


})

router.post('/users/me/avatar',upload.single('avatar'),async(req,res)=>{
    res.send({message:"Image Uploaded Successfully"})
})


module.exports=router