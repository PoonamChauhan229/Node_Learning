const { MongoClient } = require("mongodb")
const connectionString = "mongodb://127.0.0.1:27017/"
const databaseName = 'task-manager-mongodblocal'
async function createConnection(){
    const client =new MongoClient(connectionString)
    await client.connect();
   // console.log("Mongo is connected")
   const db=client.db(databaseName)
    return client;
}
createConnection().then((res)=>{
    console.log("Mongo is connected and db created")
    // console.log(res)
    
}).catch(err=>console.log(err))