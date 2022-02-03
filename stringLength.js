
const stringLength = (string) => {
  if(string.length < 0 || string.length > 10){
      throw new Error("Check fail");
  }else{
return string.length
  }
}


module.exports = stringLength
