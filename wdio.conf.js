const chai = require('chai');
exports.config = {
    runner: 'local',
    //Test scripts
    specs: [
        'test/login.js'
    ],
    suites: {
        login: [
            'test/login.js'
        ],
        alert: [
            'test/alert.js'
        ]
    },
    maxInstances: 1, //so luong toi da session duoc mo khi run test
    capabilities:[
        {
            browserName:'chrome'
        }
    ],
    baseUrl: 'http://the-internet.herokuapp.com',
    sync: true,
    logLevel: 'silent',
    //Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '/',
    reporters: ['dot'],
    //Mocha
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000

    },
    before:() => {
        global.expect = chai.expect;
    }
}