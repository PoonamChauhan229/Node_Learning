// const mongoose=require('mongoose')
// const connection=async()=>{
//     await mongoose.connect(process.env.MONGODB_URL,{
//     useNewUrlParser:true
// })
// console.log(process.env.MONGODB_URL)
// console.log("Mongodb is connected")
// }
// module.exports=connection;

const mongoose = require("mongoose");

const connection = async () => {
try {
await mongoose.connect(process.env.MONGODB_URL, {
useNewUrlParser: true,
useUnifiedTopology: true,
});
console.log("connected to MONGODB");
} catch (err) {
throw err;
process.exit();
}
};

module.exports = connection;
