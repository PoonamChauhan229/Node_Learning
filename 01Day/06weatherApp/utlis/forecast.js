// Setup the forecast function for getting the forecast
// Require the function in app.js
// 3 calls

// forecast(-75.7088,44.1545,(error,data)=>{
    // console.log(error,data)
// })

const request=require('request')

const forecast=(lat,lon,callback)=>{
  const newUrl=`http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=${lat},${lon}&units=f`
  request({url:newUrl,json:true},(error,response)=>{
    // console.log(response.body)
   if(error){
    callback("Unable to connect to the Geolocation",undefined)
   }
   else if(response.body.error){
    callback("Unable to get the geocodes as per the LatLon and try again with different LatLon",undefined)
   }
   else{
    let data=response.body.current
    callback(undefined,`It is currently ${data.temperature} degrees out and there is an ${data.feelslike}% chance of rain  and weather Description is ${data.weather_descriptions[0]}`)

   }
})

}
module.exports=forecast;