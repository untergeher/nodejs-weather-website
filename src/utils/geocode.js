const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidW50ZXJnZWhlciIsImEiOiJja29oOTRja2ExM3FuMm5yMGh1M3l2ZWkzIn0.IbufFrbYxl-fudj12l7rEg&limit=1'
  request({url, json: true}, (error, {body} = {}) => {
    if (error) {
      callback('Unable to connect to location services', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find the location', undefined)
    } else {
      const latitude = body.features[0].center[0]
      const longitude = body.features[0].center[1]
      const location = body.features[0].place_name
      callback(undefined, {
        location: location,
        latitude: latitude,
        longitude: longitude,
      })
    }
  })
}

module.exports = geocode
