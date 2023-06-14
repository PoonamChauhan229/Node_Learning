const geoCode=(address,callback)=>{
    setTimeout(()=>{
        const data={
            lat:0,
            lon:0
        }
        console.log(address)
        callback(data)
    },2000)
   
}
geoCode("Philadelphia",(params)=>{
    console.log(params)
})


// Challenge
// Define the add function that accept the correct argument
// 2 sec delay
// callback function=>sum

function add(a,b,callback){
    setTimeout(()=>{
        // var total=a+b;
        // callback(total)
        callback(a+b)
    },2000)
}
add(1,4,(sum)=>{
    console.log(sum)
})