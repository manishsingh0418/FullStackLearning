// Write a function called sum that finds the sum from 1 to a number
function findSum(number)
{
    let sum=0;
    for(let i=1;i<=number;i++)
    {
        sum+=i;
    }
    return sum;
}
let number=2;
let result=findSum(number);
console.log(result);