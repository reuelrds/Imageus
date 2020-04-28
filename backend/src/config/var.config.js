// Configuration File: It Contains values for various variables
const yargs = require('yargs');

const env = yargs.argv.env ?  yargs.argv.env : yargs.argv._[0];

const config = {
    env,
    PORT: process.env.PORT || "3001",
    mongodb: {
      url: 'mongodb://127.0.0.1:27017/Imageus'
    },
};

module.exports = config;