
function sumFibs(num) {
  let fibNums = [1, 1];
  
  for (let i = 1; i <= num; i++) {
    if (fibNums[i] + fibNums[i - 1] <= num) {
      fibNums.push(fibNums[i] + fibNums[i - 1]);
    } else break;
  }
  
  return fibNums
  .filter( item => item % 2 != 0)
  .reduce( (accumulator, item) => accumulator + item, 0 );
}

sumFibs(44);
