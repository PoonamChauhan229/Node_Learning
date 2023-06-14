const request=require('request')



// importing from utilis folder
const geoCode=require('./utlis/geoCode')

// geoCode("Boston",(error,data)=>{
//     console.log(error,data)
// })

// importing forcast from utilis folder for challenmge 6
const forecast=require('./utlis/forecast')

// forecast(37.8267,-122.4233,(error,data)=>{
//     console.log(error,data)
// })


geoCode("Boston",(error,data)=>{
  //  console.log("New Data",data)
    if(!error){
        console.log(error,"GeoCode")
    }
        forecast(data.lat,data.lon,(error,forecastData)=>{
        if(!error){
            console.log(error,"Forecast")
        }
        
    //    console.log("Hello",data.place)
    //    console.log("Hello",forecastData)
        }
    )

})


// Accept location via command line
// Challenge
// console.log(process.argv[2])


const address=process.argv[2]
if(!address){
    console.log("Please provide valid location")
}
else{
geoCode(address,(error,{lat,lon,place})=>{
   
    if(error){
        console.log(error,"GeoCode")
    }else{
        console.log(lat,lon)
    }
        forecast(lat,lon,(error,forecastData)=>{
        if(error){
            console.log(error,"Forecast")
        }
        
        console.log("Hello Process",place)
        console.log("Hello Process",forecastData)
        }
    )

})
}