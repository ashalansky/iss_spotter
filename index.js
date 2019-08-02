const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    return console.log("error", error);
    
  }
  console.log('Here is your IP:', ip);
});

fetchCoordsByIP('184.68.214.222', (error, coords) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log('It worked! Returned Coords:', coords);
});

const exampleCoords = {latitude: '49.27670', longitude: '-123.13000'};
fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    return console.log("It didn't work!" , error);
  }

  console.log('It worked! Returned flyover times:' , passTimes);
})

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});