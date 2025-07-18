// Reverse  Strings in JavaScript
function reverse(str) {
    return String(str).split('').reverse().join('');
}

console.log(reverse("Shailendra"));  // Output: "ardneliahS"
console.log(reverse(12334445));      // Output: "54443321"
