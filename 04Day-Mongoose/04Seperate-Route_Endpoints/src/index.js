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


