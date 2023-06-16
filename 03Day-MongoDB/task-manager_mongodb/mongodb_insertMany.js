//mongodb is going to store whatever comes back from requiring the MongoD.B. NPM library and what comes back is an object.



// Now on that object there's one thing we need to actually initialize the connection.This is known as the Mongo client.
//So we're going to create a new constant for that Mongo uppercase M client and we'll get that off of mongodb.MongoClient
//the Mongo client is gonna give us access to the function necessary to connect it to the database so we can perform our four basic CRUD operations.

const { MongoClient } = require('mongodb');

// Connection URL =>string
// Connection we shall connect to the localhost URL
// link get it from mogodb compass
const connectionString = "mongodb://127.0.0.1:27017/"

// Database Namee

const databaseName = 'task-manager-local2'

//we can now use Mongo client to connect to the server
// Mongo client has one method we're gonna end up using that is appropriately called connect.
// connect takes in quite a few different arguments to actually set up the connection.

async function createConnection(){
    const client =new MongoClient(connectionString)
    await client.connect();
   // console.log("Mongo is connected")
   const db=client.db(databaseName)
   
    const result = await db.collection('users').insertMany([{
        name:"Andrew",
        age:27
    },{
        name:"Poonam",
        age:28
    }])
    console.log('Inserted documents:', result)   

    
    // Retrieve the inserted document by its _id
    const insertedIds = Object.values(result.insertedIds);
    const insertedDocument = await db.collection('users').find({ _id: { $in: insertedIds } }).toArray();

    console.log('Inserted document:', insertedDocument); 
    
}
createConnection()