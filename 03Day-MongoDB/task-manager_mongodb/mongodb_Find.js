const {MongoClient,ObjectId}=require('mongodb')
const connectionString = "mongodb://127.0.0.1:27017/"
const databaseName = 'task-manager-local2'

async function createConnection(){
    const client=new MongoClient(connectionString)
    await client.connect();

    const db=client.db(databaseName)

    const result=await db.collection('users').find({name:"Poonam",age:28}).toArray()
    console.log(result)

    const result1=await db.collection('users').find({}).toArray()
    console.log(result1)

    // count
    const result2=await db.collection('users').find({}).count()
    console.log(result2)

    const result3=await db.collection('users').find({age:28}).count()
    console.log(result3)
}
createConnection()