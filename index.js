const { fetchMyIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("error" , error);
    return;
  }

  console.log('Here is your IP:' , ip);
});