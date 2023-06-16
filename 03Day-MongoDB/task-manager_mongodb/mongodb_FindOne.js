const {MongoClient,ObjectId}=require('mongodb')
const connectionString = "mongodb://127.0.0.1:27017/"
const databaseName = 'task-manager-local2'

async function createConnection(){
    const client=new MongoClient(connectionString)
    await client.connect();

    const db=client.db(databaseName)

    const result=await db.collection('users').findOne({name:"Poonam",age:28})
    console.log(result)

    const result1=await db.collection('users').findOne({ _id: new ObjectId("648c590bb8643ec1658c30ce")})
    console.log(result1)
}
createConnection()