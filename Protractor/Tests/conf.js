exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    capabilities: {
      'browserName': 'chrome'
    },
    framework:'jasmine2',
    onPrepare: function() {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'Tests/allure-results'
      }));
    }
  };