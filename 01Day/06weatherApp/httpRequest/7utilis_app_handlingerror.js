
const geoCode=require('../utlis/geoCode')
const forecast=require('../utlis/forecast')

geoCode("Boston",(error,data)=>{
    if(error){
      console.log(error)
    }
    console.log(data)
    console.log(data.lat)
    const {lat,lon}=data
    forecast(lat,lon,(error,forecastData)=>{
        if(error){
        console.log(error)
        }
        console.log(forecastData)
        console.log(data.place)
        
    })

})



