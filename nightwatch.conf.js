let selenium = require('selenium-server');
let chromedriver = require('chromedriver');

require('nightwatch-cucumber')({
    cucumberArgs: [
	'--require', 'features/step_definitions',
        'features'
    ]
})

module.exports = {
    selenium: {
       start_process: true,
       server_path: selenium.path
    },
    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                "webdriver.chrome.driver": chromedriver.path,
                "window-size": "1280,800"
            }
        }
    }
}
