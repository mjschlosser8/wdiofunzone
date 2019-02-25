exports.config = {
    runner: 'local',
    outputDir: './reports',
    specs: [
        './tests/spec/*.spec.js'
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'firefox'
    }],

    logLevel: 'trace',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'https://webdriver.io',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: ['selenium-standalone'],

    framework: 'mocha',
    reporters: [
    'dot'
],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before:

    function() {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.assert();
    chai.Should();
}
}
