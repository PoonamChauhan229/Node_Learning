// Print  a small forecast to the user
// Print it is currently 58.55 degrees out.
// There is a 0% chance of rain
// Test your work
console.log("Challenge")
const request=require('request')
const url=`http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=37.8267,-122.4233&units=f`
request({url:url,json:true},(error, response)=>{
    const data=response.body.current
    // console.log(response.body.current)
    console.log(`It is currently ${data.temperature} degrees out and there is an ${data.feelslike}% chance of rain  and weather Description is ${data.weather_descriptions[0]}`)
}) 