
const request=require('request')
const url=`http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=37.8267,-122.4233&units=f`
request({url:url,json:true},(error, response)=>{
    if(error){
        console.log("Unable to connect to weather service") 
    }else if(response.body.error){
        console.log("Unable to find the location")
    }
    else{
        const data=response.body.current
        // console.log(response.body.current)
        console.log(`It is currently ${data.temperature} degrees out and there is an ${data.feelslike}% chance of rain  and weather Description is ${data.weather_descriptions[0]}`)

    }
   
})