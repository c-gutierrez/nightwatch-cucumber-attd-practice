let reporter = require('cucumber-html-reporter');

let options = {
        theme: 'bootstrap',
        jsonFile: 'reports/report.json',
        output: 'reports/report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "LOCAL",
            "Browser": "Chrome localhost",
            "Platform": "MacOs",
            "Executed": "Local"
        }
    };

// Launch report
reporter.generate(options);

    
