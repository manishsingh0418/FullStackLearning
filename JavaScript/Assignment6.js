// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// Also tell the user if they are legal to vote or not
function greet(user)
{
    console.log("Hi "+user.name +" your age "+ user.age +" your gender is "+user.gender);
    if(user.age>=18){
        console.log("You are legal to vote");
    }
    else{
        console.log("You are not legal to vote");
    }
}
let user ={
    name:"Manish",
    age:17,
    gender:"Male"
}
greet(user);