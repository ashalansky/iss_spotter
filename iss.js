const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const ip = JSON.parse(body).ip; {
      return callback(null, ip);
    }
  })
};
const fetchCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const {latitude, longitude } = JSON.parse(body).data;
      if (error) {
        callback(error, null);
      } else {
        callback(null, {latitude, longitude});
      }
  });
};



module.exports = { fetchMyIP, fetchCoordsByIP };
