const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("error", error);
    return;
  }
  console.log('Here is your IP:', ip);
});

fetchCoordsByIP('184.68.214.222', (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned Coords:', coords);
});