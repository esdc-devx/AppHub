var title = new Vue({
  el: 'title',
  data: {
    title: 'App Hub'
  }
});

var appDetails = new Vue({
  el: '#appDetails',
  data: {
    name: 'App Hub',
    description: 'The App Hub, otherwise known as the Application Dashborad Hub. The App Hub is a dashboard to show application pipeline status for multiple solutions in ESDC.',
    build: 'Built by the Developer Experince team.'
  }
});

var coreDataTable = new Vue({
  el: '#coreDataTable',
  data: {
    caption: 'Code Coverage Status',
    slnHeader: 'Solution',
    coverageHeader: 'Coverage',
    dateHeader: 'Date Updated',
    solutions: [
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
    ]
  }
});