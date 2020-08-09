const https = require('https');
const fs = require('fs');

let apiResponseData = '';

module.exports = function (apikey) {

  https.get(`https://maps.googleapis.com/maps/api/js?key=${apikey}&libraries=places`, res => {

    res.on('data', data => {

      apiResponseData += data;
    })

    res.on('end', () => {

      fs.writeFileSync(__root + '/public/scripts/lmaps.js', apiResponseData, err => err);
    })
  })
}