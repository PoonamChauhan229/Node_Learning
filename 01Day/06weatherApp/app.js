const request=require('request')
// https://www.npmjs.com/package/request

const url=`http://api.weatherstack.com/current?access_key=8087c15b23a6cf1192cc2b9ee2a578c2&query=New%20York`
// request which is a function to make the request
// 1st args=>object which which will takes an url
// 2ns args=>callback function to run once we actually have that response
        // =>2 params=> error and response   
// we can actually access the response.
// This includes all sorts of information.
// it does include the JSON response.
// contain everything about the response way more information than just that JSON data
request({url:url},(error,response)=>{
    //  console.log(response)
    //  the above response is in the string
    // the actual response which we want is in the body
    const data=JSON.parse(response.body)
    // console.log(data)
    console.log(data.current)
})
// JSON in lower case can get set to equal True or false
console.log( `Adding JSON `)
request({url:url,json:true},(error,response)=>{
    console.log(response.body.current)
})