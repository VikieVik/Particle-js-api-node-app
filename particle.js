/** 
 * This node app inetracts with vikas singhs particle account and alllows 
 * us to do stuff.
 * refer particle js api docs for more
 * https://docs.particle.io/reference/SDKs/javascript/#login
 * 
 * */ 

const json = require('json');// import json module
var Particle = require('particle-api-js'); // import particle js module
var particle = new Particle(); // craete particle instance from library
var token;  // variable to store token recieved during login

// Enter cloud credentials
const myname  = ('particle account username');
const mypass = ('particle account password');

particle.login({username: myname, password: mypass})
.then(function(data){
token = data.body.access_token;
console.log('your token is :', token);


/** 
 * Get devices listed
*/
var devicesPr = particle.listDevices({ auth: token }); // device list mechanism
devicesPr.then(
  function(devices){
  console.log('Devices: ', devices); // log list of devices
  var deviceId = devices.body[0].id; // id of device index 0 on the list
  console.log('device id of first device:',deviceId); // log device id 
},
  function(err) {
    console.log('List devices call failed: ', err); //list device call failure
  }
);
},
function(err){
    console.log('could not log in.', err); // throw an error when can not login
}
);
