const request=require('request')
const geoCodeURL=`https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w&limit=1`
request({url:geoCodeURL,json:true},(error,response)=>{
    // console.log(response.body)
   if(error){
    console.log("Unable to connect to the Geolocation")
   }else if(response.body.features.length===0){
    console.log("Unable to get the geocodes as per the SearchTerm and try again with different searchTerms")
   }else{
    let lat=response.body.features[0].center[0]
    let lon=response.body.features[0].center[1]
    console.log(lat,lon)

const url=`http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=${lon},${lat}&units=f`
request({url:url,json:true},(error, response)=>{
    // checking the existence of error
    if(error){
        // Not connected to internet
        console.log("Unable to connect to weather service") 
        // remove lat and lon both 
    }else if(response.body.error){
        console.log("Unable to find the location")
    }
    else{
        const data=response.body.current
        // console.log(response.body.current)
        console.log(`It is currently ${data.temperature} degrees out and there is an ${data.feelslike}% chance of rain  and weather Description is ${data.weather_descriptions[0]}`)

    }
   
})
    
   }
})


// There is a probelm in code.
// hard to read and maintain
//its not reuable at all
