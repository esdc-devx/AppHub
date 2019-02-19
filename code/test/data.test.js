const data = require('../data');

test('GetCCAlert returns "warning" with 10 provided', () => {
    expect(data(10)).toBe('warning'); //works but I'm not sure why the function name isn't needed...

    // var sut = jest.fn(data.GetCCAlert);
    // var result = sut(10); // this returns undified...
    // expect(result).toBe('warning');
});

test('GetCCData returns results', () => {
    var sut = jest.fn(data.GetCCData);
    sut();
    expect(sut).toHaveReturned();
});