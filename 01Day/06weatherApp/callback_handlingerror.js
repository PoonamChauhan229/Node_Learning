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

// Another example

const geoCode=(address,callback)=>{
    const newUrl=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w&limit=1`
request({url:newUrl,json:true},(error,response)=>{
    // console.log(response.body)
   if(error){
    callback("Unable to connect to the Geolocation","No data Found")
   }else if(response.body.features.length===0){
    callback("Unable to get the geocodes as per the SearchTerm and try again with different searchTerms","No Data Found")
   }else{
    let lat=response.body.features[0].center[0]
    let lon=response.body.features[0].center[1]
    let place=response.body.features[0].place_name
    callback('No Error Found !!!',{lat,lon,place})
   }
})
}
geoCode("Norway",(error,data)=>{
    console.log(error,data)
})