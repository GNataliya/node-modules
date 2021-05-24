const os = require('os');
const speed = require('./speed.js');

const modelResult = os.cpus().map(arr => arr.model);

console.log(speed.speedMyLaptop);
module.exports.modelMyLaptop = modelResult;


// module.exports = {
//     modelMyLaptop: modelPC,
//     speedMyLaptop: speedPC,
// }