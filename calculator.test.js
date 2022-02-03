const calculator = require('./calculator.js')

describe('sum',()=>{
  test('2 + 2 should equal 4',() => {
      expect(calculator.add(2,2)).toBe(4)
  })

  test('one value missing throw error', () => {
      expect(()=>{
          calculator.add(2).toThrow()
      })
  })

  test('one or both values is less than 1',()=>{
      expect(()=>{
          calculator.add(-1,3).toThrow()
      })
  })



})

describe('subtract', () => {
    test('4-2 to equal 2', () => {
        expect(calculator.subtract(4,2)).toBe(2)
    })
 
    test('2-4 to throw', () => {
        expect(() => {
            calculator.subtract(2,4)
        }).toThrow();
    })
      
    test('not numbers as parameters should throw', () => {
        expect(() => {
            calculator.subtract('hi',2)
        }).toThrow();
    })
 
 })
