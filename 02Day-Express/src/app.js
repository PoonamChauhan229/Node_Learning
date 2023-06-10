const geoCode=require('./utlis/geoCode')
const foreCast=require('./utlis/forecast')

// Express library exports just a single function so express is actually a function as opposed to something like an object and we call it to create a new express application 
const path=require('path')
const express=require('express')
const exp = require('constants')
// console.log(express)
const app=express()
// Now the Express function doesn't take in any arguments.
// Instead we configure our server by using various methods provided on the application itself.

// For this example imagine we owned the following domain.
// app.com
// Now, we visit app.com want to about page
// app.com/about
// Then we visit another page home page
// app.com/home
// So we have one domain app.com and all of it's going to run on a single express server.

// What we have done , we have setup multiple routes.
// / this is known as root route
// /abc this are known as routes.

// We setup route using a method on app 
// app.get()
// it is app.get()
//  this lets us configure what the server should do when someone tries to get the resource at a specific U.R.L. maybe we should be sending back HTML or maybe we should be sending back JSON now the get method which we're gonna use a ton throughout the class takes in two arguments.
// 1st route
// function=> we describe what we want to do when someone visits this particular route
    // =>two very important arguments
    // =>The first is an object containing information about the incoming request to the server.This is commonly called req which is short for request
    // The other argument is the response

// We could do something like read data from the database or create some HTML and we could use various methods on response to actually send a response back.
// Let's go ahead and stick with a very basic text response.

const publicDirectory=path.join(__dirname,"../public")
app.use(express.static(publicDirectory))


// This is at the root route
app.get('/',(req,res)=>{
// Displaying some text in the browser or send something back to the requester so if someone's making a request
// res.send("Hello Express!!!")
res.send('<h1>Welcome to the Weather App</h1>')

})

// Now the last thing we need to do is actually start the server up.
// Currently the server is not up and running
// We have to use one more method on app which will only ever use a single time in our application
// app.listen()

// This starts up this server and it has to listen on a specific port for the moment ie. common development PORT 
// PORT No will be 3000

// When you visit a Website you don't provide the port because there are default ports for example for an HTTP based website.

// But for now in our local development environment as we're just viewing on our local machine port 3000 is gonna work really well.
// 2 args
// 1st=> PORT NO
//2nd =>Optional args:function 
    // =>optional argument we can pass to the listen method is a callback function which just runs when the server is up and running.
    // The process of starting up a server isn't a synchronous process though it'll happen almost instantly.
    

app.listen(3000,()=>{
    console.log("Server is Running at PORT 3000")
})

// This is just going to display as a useful piece of information when running the application down below.
// this message is never going to display to someone in the browser
// Lets start the server
// In the console, if we see, server is up and running at PORT 3000
// node app.js
// Server wont stop now,that means that it is going to stay up and running as long as we let it
// Now lets visit the browser
// we can access our server on localhost:3000
// Right here I get my message Hello express printing to the screen

// So when we visited that you are all in the browser 
    // =>it went off to our server the Express server found the matching route which is this one for the route and it processed the request using our handler the handler used response dot send to send back a text response and that is exactly what we're seeing inside of the browser.

// Now let us setup the another route

app.get("/help",(req,res)=>{
    // res.send("Welcome to our help Page")
    // res.send({
    //     name:"Poonam",
    //     age:28
    // })
    res.send([{
        name:"Poonam"
    },
    {
        name:"Shivam"
    },{
        name:"Sandeep"
    }])

})
// We will have to cut the server and restart the same as we did some changes
// inorder to avoid that, let us use nodemon and start the server

// Now, for example, if an user visits any route which is not present
// Then, its gets an error like, 
// Cannot GET /About
// So, in this scenario, we are supposed to do
// For that we will set up an 404 Page Error, that we will see up later

// Now, lets go for an challenge
// Goal :Set up 2 new Routes
// Setup an about route and render a page title
// Setup an weather route and render a page title
// Test both the routes in the browser

app.get('/about',(req,res)=>{
    // res.send("About Page")
    // Challenge Ans
    res.send('<h1>About Page</h1>')
})

// app.get("/weather",(req,res)=>{
//     // res.send("Weather Page")
//     // Challenge Ans
//     res.send({
//         forecast:"It is snowing",
//         location:"Philadelphia"
//     })
// })

// Challenge:

// app.get("/weather",(req,res)=>{
//     if(!req.query.address){
//         res.send({
//             error:"No address? Pass an address"
//         })
//     }   
//     res.send({
//         forecast:"It is snowing",
//         location:"Philadelphia",
//         address:req.query.address
//     })
// })

app.get("/weather",(req,res)=>{
    if(!req.query.address){
        res.send({
            error:"No address? Pass an address"
        })
    }  
    geoCode(req.query.address,(error,{latitude,longitude})=>{

    }) 
    res.send({
        forecast:"It is snowing",
        location:"Philadelphia",
        address:req.query.address
    })
})



// http://localhost:3000/products?search=games&rating=5
app.get("/products",(req,res)=>{
    if(!req.query.search){
        res.send({
            
            error:"You Must Provide a Search Term"})
    }
    res.send({
        products:[
            {
                "search":req.query.search,
                "rating":req.query.rating
            }
        ]
    })
})

// We have our Express server in place and we have our four routes set up for each we're sending back a text response which gets shown in the browser.
// We're either going to send back HTML designed to be rendered in the browser or we're going to send back JSON, designed to be consumed and used by code.
// Let's go ahead and explore how we can get both of those done.
// we have to use again res.send()
// So imagine that I wanted to render some HTML out I could remove the contents of the string and put some HTML right inside of the string.

//Sending the HTML 
// So we can remove the string and just add the h1 tag
// So lets go above to the root route and change the string
// res.send("<h1>Welcome to the Weather App</h1>")
// So we see the same in the browser in bold letters

//Now we can even send the JSON
// Now lets go the help route and change it to JSON Data
// we provide either an object or an array
// Let us pass to send an object
//  res.send({
//     name:"Poonam",
//     age:28
// })
// Visit the help route , we will get the JSON Data

// Even we can pass the array of objects to the route
// lets go again to the help route
// Now , if we go back to the browser, we see the array of objects in the help route.

// Now Challenge Time

// Setup the about route to render a title with HTML
// Setup weather route t send back JSON
    //Object with forecast and location strings
// Test the work by visiting the browser.


console.log(__dirname)
console.log(__filename)

// PATH

// const path=require('path')
console.log(path.join(__dirname,".."))
console.log(path.join(__dirname,"../.."))
// Now , i want to go public folder
console.log(path.join(__dirname,"../public"))

// NOW, we will use app.use()
// this will explain what its doing
// For now all you need to know is that it's a way to customize your server

// app.use(express.static(path.join(__dirname,"../public")))
// express.static so express dot static is a function
// static takes the path to the folder

// instead of directly passing it, lets store it in 1 variable and do it

// const publicDirectory=path.join(__dirname,"../public")
// app.use(express.static(publicDirectory))

// This 2 lines let us paste at the top so that we can get the access of it

















