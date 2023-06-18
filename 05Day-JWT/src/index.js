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


