const os = require('os');

const speedResult = function (){
   return os.cpus().map(arr => arr.speed);
};
const speedPC = speedResult();

// const speedResult = () => {
//     const [{ speed }] = os.cpus();
//     return speed;
// }
// const speedPC = speedResult();

module.exports.speedMyLaptop = speedPC;