function palindrome(word) {
  var isPalindrome = false;
  var start = 0;
  var end = word.length - 1;
  for (var i = lengthToTraverse(word.length); i >= 0; i--) {
    var charAtStart = word.toLowerCase().charAt(start);
    var charAtEnd = word.toLowerCase().charAt(end);
    if (charAtStart != charAtEnd) {
      isPalindrome = false;
      break;
    }
    isPalindrome = true;
    start++;
    end--;
  }
  return isPalindrome;
}

function lengthToTraverse(length) {
  var half;
  if (length % 2 == 0) return length / 2;
  else return parseInt(length / 2) + 1;
}

function main() {
  console.log(palindrome("Hello"));
  console.log(palindrome("RaCEACAR"));
  console.log(palindrome("abba"));
  console.log(palindrome("kaYak"));
  console.log(palindrome("A"));
  console.log(palindrome("ABCDABCD"));
}

main();
