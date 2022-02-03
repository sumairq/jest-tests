const stringLength = require('./stringLength')


test('a basic "string" should equal to 6', () => {
    expect(stringLength('string')).toBe(6);
})

test("error case", () => {
    expect(() => {
        stringLength("stringstring")
    }).toThrow("Check fail")
})
