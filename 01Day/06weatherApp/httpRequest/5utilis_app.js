// importing from utilis folder
const geoCode=require('../utlis/geoCode')

geoCode("Boston",(error,data)=>{
    console.log(error,data)
})

// importing forcast from utilis folder for challenmge 6
const forecast=require('../utlis/forecast')

forecast(37.8267,-122.4233,(error,data)=>{
    console.log(error,data)
})

