function GetCCAlert(ccPercentage) {
    if (!ccPercentage) {
        return 'danger';
    } else if (ccPercentage <= 25) {
        return 'warning';
    } else {
        return 'success';
    }
}
function GetCCData() {
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
}



module.exports = GetCCData;
module.exports = GetCCAlert;