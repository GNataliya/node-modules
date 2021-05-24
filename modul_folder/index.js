const os = require('os');
const speed = require('./speed.js');

const modelResult = function(){
    return os.cpus().map(arr => arr.model);
};
const modelPC = modelResult();


console.log(speed.speedMyLaptop);
module.exports.modelMyLaptop = modelPC;


// module.exports = {
//     modelMyLaptop: modelPC,
//     speedMyLaptop: speedPC,
// }