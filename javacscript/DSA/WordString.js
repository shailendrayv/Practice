//write a program that finds all occurreneces of a given  word in a big string.




const text = "This is a test. Testing a test case with test word.";
const word = "test";
function findOccurrences(bigStr, word) {
  let indices = [];
  let index = bigStr.indexOf(word);

  while (index !== -1) {
    indices.push(index);
    index = bigStr.indexOf(word, index + 1); // search from next position
  }
  return indices;
}
console.log(findOccurrences(text, word));
// Output: [10, 22, 37]  (all starting positions of "test")
