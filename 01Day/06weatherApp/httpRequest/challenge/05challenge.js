const request=require('request')
// Another API
// Print Lat and Lon of Los Angeles from Mapbox API.
// Test your work.

const geoCodeURL=`https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGVlY2VlMjI5IiwiYSI6ImNsMXpicnlxMzBrenIzY21xMmowdHMxY3YifQ.qYJByU5i-SA4E5LC7muC0w&limit=1`
request({url:geoCodeURL,json:true},(error,response)=>{
    // console.log(response.body)
    let lat=response.body.features[0].center[0]
    let lon=response.body.features[0].center[1]
    console.log(lat,lon)
})