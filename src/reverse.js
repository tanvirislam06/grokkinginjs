function reverse(word) {
  var newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}

function main() {
  console.log(reverse("Hello"));
}

main();
