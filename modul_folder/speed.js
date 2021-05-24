const os = require('os');

const speedResult = os.cpus().map(arr => arr.speed);

// const speedResult = () => {
//     const [{ speed }] = os.cpus();
//     return speed;
// }
// const speedPC = speedResult();

module.exports.speedMyLaptop = speedResult;