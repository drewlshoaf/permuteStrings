let term = 'drew';
let minlength = 2;

function permut(term) {
  if (string.length < minlength) return string;
  var permutations = [];
  for (var i=0; i<string.length; i++) {
      var char = string[i];
      //no duplicates
      if (string.indexOf(char) != i)
      continue;
      var remainingString = string.slice(0,i) + string.slice(i+1,string.length); 
      for (var subPermutation of permut(remainingString))
          permutations.push(char + subPermutation);
  }
  return permutations;
}