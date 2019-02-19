  var developer = "Developer Experience"
  var appName = "App Hub";
  var appNameFull = "Application Dashboard Hub";
  var appDescription = 'The ' + appName + ', otherwise known as the ' + appNameFull + '. The ' + appName + ' is a dashboard to show application pipeline status for multiple solutions in ESDC.';
  var ccData = [
    {
      name: 'app1',
      cdCoverage: '0',
      date: 'n/a'
    },
    {
      name: 'App 2',
      cdCoverage: '80',
      date: '2019/02/04 12:15'
    },
  ];

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
      solutions: ccData
    }
  });