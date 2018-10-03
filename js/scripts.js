//Back-end Logic
//Store the message for a positive outcome as a variable.
var isPalindromeMessage = "Yes! Yes!<br>You've done it!<br>Wow! Now <em>that's </em> what I call a palindrome!"
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
//A custom function that strips the original string, saves it for comparison, converts it into an array
//then reverses that array before joining it back into a string to compare with the original string.
//The results of this comparison are printed in the output div on the document.
function stringAnalyzer(string) {
  let wordArray = []
  let cleanString = punctuationless(string);
  let original = cleanString;
  let reversed = reversedString(cleanString);
  $('#reversed_input').text($('#user_string').val());
  if (original === reversed) {
    $('#palindrome_results').empty();
    $('#palindrome_results').html(isPalindromeMessage);
  } else if (original != reversed) {
    $('#palindrome_results').empty();
    $('#palindrome_results').html(notPalindromeMessage);
  }
}
//Front-end Logic
$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    stringAnalyzer($('#user_string').val());
  });
});
