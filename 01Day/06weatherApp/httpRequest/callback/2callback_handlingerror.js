const request=require('request')

const url=`http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=37.8267,-122.4233&units=f`
const getTemp=(callback)=>{
   request({url:url,json:true},(error,response)=>{
    if(error){
        callback("Unable to connect to weather service","No data") 
    }else if(response.body.error){
       callback("Unable to find the location","No data")
    }
    else{
        const data=response.body.current
        // console.log(response.body.current)
        callback("No Error!!!",`It is currently ${data.temperature} degrees out and there is an ${data.feelslike}% chance of rain  and weather Description is ${data.weather_descriptions[0]}`)

    }
   }) 
}
getTemp((error,data)=>{
    console.log(error,data)
})