// Method: Using for loop with increment
const str = "banana";
const charCount = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (charCount[char]) {
    charCount[char]++;  // increment by 1
  } else {
    charCount[char] = 1;  // initialize to 1
  }
}

console.log(charCount);
// Output: { b: 1, a: 3, n: 2 }

