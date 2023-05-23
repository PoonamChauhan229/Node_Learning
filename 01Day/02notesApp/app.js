// Importing the Files:
// First code
// __________

// require('./utilis')
// const name="Poonam"
// console.log(name)

// So when we pass a file to node only that file executes if we want another file to run we have to require it for that file to actually get loaded in.

// I'm going to add a line at the very top of the file and here we're gonna use require.
// require('./utilis')
// I'm gonna call the require function exactly like we did in the last file.

// Second Code
// ___________

// require('./utilis')
// console.log(name)

// Throws an error.
// name is not defined.
// So this is one very important aspect of the node module system.
// All of your files which you can refer to as modules have their own scope.

// app.js can not access the variables from utilis.js even though it was loaded in the require.
// So if I can't access name right now how exactly do I get that done.
// The answer is that we need to explicitly export all of this stuff.
// This file should share with the outside world to do this.
// module.exports=name

// Third Code
// const name=require('./utilis')
// console.log(name)

// fourth code
const {name,add}=require('./utilis')
const sum=add(4,2)
console.log(name,sum)

// Challenge Time
// 1way
const notes=require('./notes')
const getNotesData=notes()
console.log(getNotesData)

// 2nd way
const getNotes=require('./notes')
console.log(getNotes())
