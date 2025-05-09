// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
function OddEven(number) {
  if (number % 2 == 0) {
    return "The number is even.";
  } else return "The number is odd.";
}
let number = 4;
let result = OddEven(number);
console.log(result);
