// Repeat string "banana" using a for loop
const str = "banana";

// Method 1: Repeat string multiple times
for (let i = 0; i < 5; i++) {
  console.log(str);
}

// Method 2: Repeat string and concatenate
let result = "";
for (let i = 0; i < 5; i++) {
  result += str;
}
console.log(result);

// Method 3: Repeat each character of "banana"
for (let char of str) {
  console.log(char);
}