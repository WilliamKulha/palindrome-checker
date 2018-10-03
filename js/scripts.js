//Back-end Logic

//Store the message for a positive outcome as a variable.
var isPalindromeMessage = "Wow! Now <em>that's </em> what I call a palindrome!"
//store the message for a negative outcome as a variable.
var notPalindromeMessage = "Boooo! We're sorry, but that's <em> not </em>a palindrome!"
//Define a custom function to remove punctuation marks.
function punctuationless(stringToStrip) {
  return stringToStrip.replace(/[^A-z0-9_]/g,"");
}

function reversedString(string) {
  let lettersAsArray = string.split("");
  return lettersAsArray.reverse().join("");
}

//Define a custom function to take user's input string, turn it into an array, then turn that array
//into an array containing single characters. Save this array for later comparison!
function stringAnalyzer(string) {
  let wordArray = []
  let cleanString = punctuationless(string);
  let original = cleanString;
  let reversed = reversedString(cleanString);
  $('#reversed_input').text($('#user_string').val());

  console.log(cleanString, reversed);

}
//define function to compare the indices of both arrays to see if there is no difference.


//Front-end Logic
$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    stringAnalyzer($('#user_string').val());
  })
})
