function GetCCAlert(ccPercentage) {
  if (!ccPercentage) {
    return "danger";
  } else if (ccPercentage <= 25) {
    return "warning";
  } else {
    return "success";
  }
}
module.exports.GetCCAlert = GetCCAlert;

function GetCCData() {
  return [
    {
      name: "app1",
      coverage: 0,
      date: "n/a"
    },
    {
      name: "App 2",
      coverage: 80,
      date: "2019/03/04 12:15"
    },
    {
      name: "Custom App",
      coverage: 15,
      date: "2019/02/12 11:43"
    }
  ];
}
module.exports.GetCCData = GetCCData;

function GetCCDataWithAlert() {
  var data = GetCCData();
  data.forEach(app => {
    app.status = GetCCAlert(app.coverage);
  });
  return data;
}
module.exports.GetCCDataWithAlert = GetCCDataWithAlert;
