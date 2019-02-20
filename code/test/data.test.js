const data = require('../data');

test('GetCCAlert returns "warning" with 10 provided', () => {
    var result = data.GetCCAlert(10);
    expect(result).toBe('warning');
});
test('GetCCAlert returns "danger" with null provided', () => {
    var result = data.GetCCAlert(null);
    expect(result).toBe('danger');
});
test('GetCCAlert returns "danger" with 0 provided', () => {
    var result = data.GetCCAlert(0);
    expect(result).toBe('danger');
});
test('GetCCAlert returns "success" with 50 provided', () => {
    var result = data.GetCCAlert(50);
    expect(result).toBe('success');
});

test('GetCCData returns results', () => {
    var sut = jest.fn(data.GetCCData);
    sut();
    expect(sut).toHaveReturned();
});