// Handling error Challenge:
// Setup an error handler
// Test up by disabling the network 
// Setup error for not matching results
// Test the altering the search term 


// Below URL to check whether second error we are getting or not.
// const geoCodeURL=`https://api.mapbox.com/geocoding/v5/mapbox.places/12what12.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w&limit=1`

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
   }
})