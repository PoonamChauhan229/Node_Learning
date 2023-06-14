

var weatherContainer=document.getElementById("weatherContainer")



async function getWeatherData(){
    var countryName=document.getElementById('cityName').value
    console.log(countryName)
   
let url=`http://localhost:3000/weather?address=${countryName}`
 let data= await fetch(url)
let res=await data.json()
console.log(res)

weatherContainer.innerHTML=`
<div class="row g-0">
              <div class="col-md-4">
                <img src="https://cdn3.vectorstock.com/i/1000x1000/10/87/weather-forecast-vector-11181087.jpg"
                class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Weather Update ${countryName}</h5>
                 
                  <p class="card-text m-0"><small class="text-muted">Location: ${res.location}</small></p>
                  <p class="card-text m-0"><small class="text-muted">Lat & Lon : ${res.lat,res.lon}</small></p>
                  <p class="card-text m-0"><small class="text-muted">Address: ${res.address}</small></p>
                  <p class="card-text m-0"><small class="text-muted">Forecast:${res.forecast}</small></p>
                </div>
              </div>
            </div>
`

}
getWeatherData()