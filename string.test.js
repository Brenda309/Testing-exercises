const stringLength = require('./string.js');

test('length should be equal to string', () => {
    expect(stringLength('hello')).toBe(5);
})