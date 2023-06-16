const {MongoClient,ObjectId}=require('mongodb')
const connectionString = "mongodb://127.0.0.1:27017/"
const databaseName = 'task-manager-local2'

async function createConnection(){
    const client=new MongoClient(connectionString)
    await client.connect();

    const db=client.db(databaseName)

    const result=await db.collection('users').deleteMany({
       age:28
    })
    console.log(result)
}
createConnection()