// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greet(user)
{
    console.log("Hi "+user.name +" your age "+ user.age +" your gender is "+user.gender);
}
let user ={
    name:"Manish",
    age:21,
    gender:"Male"
}
greet(user);