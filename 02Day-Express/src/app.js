// Express library exports just a single function so express is actually a function as opposed to something like an object and we call it to create a new express application 

const express=require('express')
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
// function=> what we want to do when someone visits the route.

app.get('/')




