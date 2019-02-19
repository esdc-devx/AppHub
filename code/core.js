var developer = "Developer Experience";
var appName = "App Hub";
var appNameFull = "Application Dashboard Hub";
var appDescription = 'The ' + appName + ', otherwise known as the ' + appNameFull + '. The ' + appName + ' is a dashboard to show application pipeline status for multiple solutions in ESDC.';

//include js files
const data = require('./data');

var head = new Vue({
  el: 'head',
  data: {
    title: appName + ' - ' + developer,
    description: appDescription,
    author: 'GoC - ' + developer
  }
});

var appDetails = new Vue({
  el: '#appDetails',
  data: {
    name: appName,
    description: appDescription,
    build: 'Built by the ' + developer + ' team.'
  }
});

var coreDataTable = new Vue({
  el: '#coreDataTable',
  data: {
    caption: 'Code Coverage Status',
    slnHeader: 'Solution',
    coverageHeader: 'Coverage',
    dateHeader: 'Date Updated',
    solutions: data()
  }
});
