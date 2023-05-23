// Importing Node Core Modules
// _______________________________
// fs.writeFile("notes.txt","This is our first file")
//takes 2 arguments
    // >name of the file 
    // >text/message to be written in the file
// Run the the file now
//ReferenceError: fs is not defined
// If we directly use it we get the above error message
// So the problem is that we're using FS. FS though needs to be loaded in and define the file system module.
// As I mentioned has to be required by us in the script you're using it in.

// So right here we're gonna add a second line before we use the file system module.
// We're gonna go ahead and load it in and this is done using the require function that node provides.And this is at the very core of the module system.
// The require function is how we load in other things whether it's a core node module a another file we created or an NPM module we've chosen to install into use in our projects to load in the file system module we have to call the require function which is indeed how we load in modules and we pass to it a single string.

// Now they require function returns all of the stuff from that module and we have to store that on a variable right now f s still doesn't exist.


const fs=require('fs')
// fs.writeFileSync('notes.txt',"This is our new file")

// We have our little message in this file was created with nodejs which is fantastic.
// Now let's go ahead and switch up the text where writing and run the script again.

fs.writeFileSync('notes.txt',"This is our brand new file")
// now rerun the code
// If the file doesn't exist as we saw it will be created if the file exist as we just saw its text content will be overwritten with the new provided message.

// Challenge Time
// Task Time
// Append an message to notes.txt
// use appendFileSync


