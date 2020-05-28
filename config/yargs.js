const argv = require('yargs')
    .options({
        address: {
            alias: 'c',
            desc: 'City name to get the weather info',
            demand: true
        }
    })
    .help()
    .version()
    .argv;

module.exports = {
    argv
}