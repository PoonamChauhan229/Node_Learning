
const geoCode=require('../utlis/geoCode')
const forecast=require('../utlis/forecast')

geoCode("Boston",(error,data)=>{
    console.log(error,data)
    console.log(data.lat)

    const {lat,lon}=data
    forecast(lat,lon,(error,data)=>{
        console.log(error,data)
    })
})



