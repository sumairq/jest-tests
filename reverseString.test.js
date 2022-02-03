const reverseString =require('./reverseString') 


test('expect hello to be olleh',()=>{
    expect(reverseString("hello")).toMatch(/olleh/)
})
