const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0b45d79a5302dde744fb6257a32f3257&query=' + longitude + ',' +latitude + ''

    request({url,json:true}, (error,{body}) => {
        if(error){
            callback('could not connect to forecast service',undefined)
        }else if(body.error){
            callback('Could not find the location',undefined)
        }else{
            callback(undefined,'Temperature is: ' + body.current.temperature + ' and humidity is: ' + body.current.humidity)
        }
    })
}


module.exports = forecast