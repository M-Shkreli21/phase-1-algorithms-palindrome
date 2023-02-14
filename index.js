function isPalindrome(word) {
  //Reversing a string using Built-In Functions:
  const stringArray = word.split("")
  const reverseArray = stringArray.reverse()

  const joinArray = reverseArray.join("")

  if(word === joinArray) return true

  else return false

  //Decrementing For Loop solution:
  let newString = ""
  for(let i = word.length - 1; i >= 0; i--) {
    newString += word[i]
  }

  if (newString === word) {
    return true
  }
  else return false
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
