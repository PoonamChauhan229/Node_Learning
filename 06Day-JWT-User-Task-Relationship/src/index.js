// Refactoring it and put it into index.js
require('./db/mongoose_async')
const User=require('./model/userModel')
const Task=require('./model/taskModel')


const userRouter=require('./routes/userRoutes')
const taskRouter=require('./routes/taskRoutes')
// Routing
const express=require('express')
const app=express()
const PORT=process.env.PORT || 3000

//
//Registering an express Middleware
// app.use((req,res,next)=>{
//     console.log(req.method,req.path)
//     next()//if we dont add , it will show loading
//     //next() - middleware should know that we done with it.
// })

//Everytime next() shouldnt call especiall when we are doing the authentication
//Get=> send a message=> They cant
//Other Req=> send an message => They are allowed

//  little variation in our middleware we can limit what a user has access to.And this is the exact same technique we'll use to enable authentication
// app.use((req,res,next)=>{
//     if(req.method==="GET"){
//         res.send("You are not allowed")
//     }else{
//         next()
//     }})

// Challenge:
// new middleware
// send an maintainance message with 503 status code.
//Test your work

// app.use((req,res,next)=>{
//     res.status(503).send("Site is currently down, Come Back Soon!!")
// })






app.use(express.json())

app.use(userRouter)
app.use(taskRouter)
app.listen(PORT,()=>{
    console.log('Server started at Port',PORT)
})

// Bycryptjs
// It uses promises hence we have to use async and await
const bcrypt=require('bcryptjs')
const myFunction=async ()=>{
    // User Provides
    const password="Red12345!"
    //returns an pomise
    const hashedPassword=await bcrypt.hash(password,8)
        // >first is the plain text password
        // >the second is the number of rounds we want to perform
        //Now the number of rounds determines how many times the hashing algorithm is executed.
        
    console.log(password)
    console.log(hashedPassword)

    // Compare and check whether password and hashed password are same
    const isMatch=await bcrypt.compare(password,hashedPassword)
    console.log(isMatch)
}
myFunction()

const jwt=require('jsonwebtoken')
const myFunctionjwt=async()=>{
    // using the sign method available on JWT that is jwt.sign()

    // takes 3 parameter
    // >object >The object contains the data that's going to be embedded in your token.
    //>String >random series of characters
    //>{expriesIn:}
    const token=jwt.sign({_id:'abc12345'},'thisismynewcourse',{ expiresIn:'7 days'})
    console.log("Token is",token)
    // We will verify the token
    const data=jwt.verify(token,'thisismynewcourse')
    console.log("Data is",data)
}
myFunctionjwt()


