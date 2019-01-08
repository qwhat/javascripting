var args = process.argv[2]; //extract argument without argv
var letters = args.split("");//turning arg into array
function obfuscate(letters) {
  for ( i = 0; i < letters.length; i++) {//loop to inspect array
    if (letters[i] === "a") {
      letters.splice([i],1,"4");//change all a -> 4
    }
    else if (letters[i] === "e") {
      letters.splice([i],1,"3");//change all e -> 3
    }
    else if (letters[i] === "o") {
      letters.splice([i],1,"0");//change all o -> 0
    }
    else if (letters[i] === "l") {
      letters.splice([i],1,"1");//change all l -> 1
    }
  }
  return letters.join("")
}
var words = obfuscate(letters)
console.log(words)
