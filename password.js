var args = process.argv[2]; //extract argument with argv
var letters = args.split("");//turning arg into array
function obfuscate() { // letters  is your array
  for ( i = 0; i < letters.length; i++) {//loop to inspect array
    if (letters[i] === "a") {//if letters at index[i] === "a" then
      letters.splice([i],1,"4");//change  a -> 4
    }
    else if (letters[i] === "e") {
      letters.splice([i],1,"3");//change  e -> 3
    }
    else if (letters[i] === "o") {
      letters.splice([i],1,"0");//change  o -> 0
    }
    else if (letters[i] === "l") {
      letters.splice([i],1,"1");//change  l -> 1
    }
  }
  return (letters.join(""));// return letters but join them first
}
var words = obfuscate(letters);// calls your obfuscate function for var letters
console.log(words); //print var words to terminal
