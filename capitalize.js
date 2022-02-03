const capitalize = (string) => {
    if(typeof(string) !== 'string'){
        throw new Error();
    }
    const arr = string.split('')
    arr.shift()
      arr.unshift(string.charAt(0).toUpperCase())
     const newString = arr.join('')
     return newString
      
}

module.exports = capitalize;
