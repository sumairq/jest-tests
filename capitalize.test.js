const capitalize = require('./capitalize')


test('check if its a single aphabet', ()=> {
    expect(capitalize("smith")).toBe("Smith")
})

test('check if string is not passed', () => {
    expect(()=> {
        expect(capitalize()).toThrow()
    })
})
