// How Request can automatically parse the JSON request 
const request=require('request')
const url=`http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=37.8267,-122.4233`

// JSON in lower case can get set to equal True or false
// Now there is no need to actually parse it.
// customizung the options object
console.log( `Adding JSON `)
request({url:url,json:true},(error,response)=>{
    console.log(response.body.current)
})