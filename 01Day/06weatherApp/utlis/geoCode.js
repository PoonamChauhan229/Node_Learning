const request=require('request')
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
module.exports=geoCode
// even if function export without parenthethis()