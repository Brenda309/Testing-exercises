function stringLength(string){
  let char = string.length 
 if (char >= 1 && char <= 10) {
    return char;
  } else {
    return ('String is either big than 10 or smaller than 1');
  }

}


module.exports = stringLength;