
/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

function joinList(conceptList) {
 for (var i = 1; i < conceptList.length; i++){
   conceptList[i] = " " + conceptList[i];
 }
 return conceptList.toString();
}// a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");
