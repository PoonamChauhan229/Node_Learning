// Append an message to notes.txt
// use appendFileSync

const fs=require('fs')
fs.appendFileSync('notes.txt',"\n Hey New file created using Append file")
// I don't want to override but append a message 
// Its work similar to writeFileSync 
// here the data/message get appended to the notes file
