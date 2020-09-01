function dropElements(arr, func) {
  let result = [...arr];

  for (let i = 0; i < result.length; i++) {
    if (func(result[i]) === false) {
      result.splice(i, 1);
      i--;
    } else {
      break;
    }
  }  
  
  return result;
}

dropElements([1, 2, 3], function(n) {return n < 3; });