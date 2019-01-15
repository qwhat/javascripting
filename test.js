function countLetters(words) {//function countLetters count each unique letter
  var words = words.toLowerCase().split(" ").join("").split("");
  var letters = {};
  for (alphabet of words) {
    if (!letters[alphabet]) {//if string is !key ->create key for string and +1 to that key
      letters[alphabet] = 1
    }
    else {
      letters[alphabet] += 1
    }
  }                                 //else +1 associated key
  return letters
  //should also return how many times a letter is repeated
//return {}
}
console.log(countLetters("Lighthouse in the house"));
