
// Accept location via command line
// Challenge
// console.log(process.argv[2])


const geoCode=require('./utlis/geoCode')
const forecast=require('./utlis/forecast')

const address=process.argv[2]
if(!address){
    console.log("Please provide valid location")
}
else{
geoCode(address,(error,{lat,lon,place})=>{
   
    if(error){
        console.log(error,"GeoCode")
    }
        forecast(lat,lon,(error,forecastData)=>{
        if(error){
            console.log(error,"Forecast")
        }        
        console.log(place)
        console.log(forecastData)
        }
    )

})
}