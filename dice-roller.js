// extract argument amount of dice
function diceRoller(args) {
  var result = []
  for(i=0; i < args; i++) {
    var dice = [1, 2, 3, 4, 5, 6];l
    var random =  dice[Math.floor(Math.random() * dice.length)];
    result.push(random)
  }
  return result.join(", ")
}
var args = process.argv[2];
var roll = diceRoller(args)
console.log("Rolled " + args + " dice: " + roll);
