// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
function manish(users) {
    return users.filter(user => user.age > 18);
}

var users = [
    { name: "Manish", age: 21 },
    { name: "Harkirat", age: 30 },
    { name: "Jaspreet", age: 17 }
];

let result = manish(users);
console.log(result); // Output: Array of users older than 18
