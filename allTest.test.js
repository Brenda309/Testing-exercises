const stringLength = require('./string.js');
const reverseString = require('./reverse.js')

test('length should be equal to string', () => {
    expect(stringLength('hello')).toBe(5);
})

test('string should be reversed',() => {
    expect(reverseString('nana')).toBe('anan')
})
