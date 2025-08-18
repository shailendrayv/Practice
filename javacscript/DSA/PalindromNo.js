// write  a program to find all palindromic substrings within a given string.

function Palindrome(num){
    const origin =num;
    let  reverse=0;
    while(num>0){
        const reminder=num%10;
        num=Math.floor(num/10);
        reverse=reverse*10+reminder;
    }
    return reverse===origin;
}
console.log(Palindrome(121));

function palindrome(inputString) {
  let reverse = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reverse = reverse + inputString[i];
  }
  return inputString === reverse;

}
console.log(palindrome("madam"));


