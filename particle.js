/** 
 * This node app inetracts with particle.io account and alllows 
 * us to do stuff documented below.
 * This base progarm can be used for dry run of particle.io js sdk
 * refer particle js api docs for more
 * https://docs.particle.io/reference/SDKs/javascript/#login
 * 
 * Author: Singh Vikas M.
 * Date: 19/12/19
 * */ 

const json = require('json');// import json module
var Particle = require('particle-api-js'); // import particle js module
var particle = new Particle(); // craete particle instance from library
var token;  // variable to store token recieved during login

// Enter cloud credentials
const myname  = ('particle.io account username');
const mypass = ('particle.io account password');

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
/**
 * Add function call feature for the same device and use delay npm module 
 * for it 
 * 
 */

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
