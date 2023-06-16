const {MongoClient}=require('mongodb')
const connectionString = "mongodb://127.0.0.1:27017/"
const databaseName = 'task-manager-local2'

async function createConnection(){
    const client=new MongoClient(connectionString)
    await client.connect();

    const db=client.db(databaseName)

    const result=await db.collection('tasks').insertMany([
        {
            description:"Clean the house",
            completed:true
        },
        {
            description:"Renew Inspection",
            completed:true
        }
])

console.log("Inserted documents:",result)

const insertedIds=Object.values(result.insertedIds)
const insertedDocument=await db.collection('tasks').find({_id:{$in:insertedIds}}).toArray()
console.log(insertedDocument)
}
createConnection()