function GetCCAlert(ccPercentage) {
    if (!ccPercentage) {
        return 'danger';
    } else if (ccPercentage <= 25) {
        return 'warning';
    } else {
        return 'success';
    }
}
module.exports.GetCCAlert = GetCCAlert;

function GetCCData() {
<<<<<<< HEAD
    return [
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
=======
    var data = [
        {
            name: 'app1',
            cdCoverage: 0,
            date: 'N/A'
        },
        {
            name: 'App 2',
            cdCoverage: 80,
            date: '2019/02/04 12:15'
        },
    ];
    data.forEach(dte => {
        dte.status = GetCCAlert(dte.cdCoverage);
    });
    return data;
>>>>>>> highlightrows
}
module.exports.GetCCData = GetCCData;