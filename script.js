function arrayDiff(a, b) {
  return a.map(el => b.filter(elem => el !== elem));
}
 
console.log(arrayDiff([1,2,3], [3]));