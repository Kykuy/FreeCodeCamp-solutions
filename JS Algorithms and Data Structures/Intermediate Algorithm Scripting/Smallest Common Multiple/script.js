function smallestCommons(arr) {
  let result = arr.sort((a, b) => a - b);
  for (let lowest = result[0],
   highest = result[result.length - 1],
    i = lowest + 1; i < highest; i++) {
    result.push(i);
  }
  result.sort((a, b) => a - b);
  let copy = [...result]

  while ( !result.every( (val, i, arr) => val === arr[0] ) ) {
    
    result[ result.indexOf( Math.min(...result) ) ] += 
    copy[ result.indexOf( Math.min(...result) ) ];

    if ( result.every( (val, i, arr) => val === arr[0] ) ) {
      break;
    }
  }
     
  
  return result[0];
}



smallestCommons([1,5]); // returns 60
