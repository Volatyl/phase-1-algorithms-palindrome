function isPalindrome(word) {
  let myWord = word.toLowerCase();
  let backward = [];
  for (let i = myWord.length - 1; i >= 0; i--) {
    backward.push(myWord.charAt(i));
  }
  if (myWord === backward.join("")) {
    return true;
  } else {
    return false;
  }
}

/* 
A word that spells backward the same way it does forward. dad
1. lowercase everything
2.map it put forward
3. map it out backward
4. compare
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
  console.log("=>", isPalindrome("dad"));
}

module.exports = isPalindrome;
