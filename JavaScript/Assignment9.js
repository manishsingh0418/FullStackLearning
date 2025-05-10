// Create a function that takes an array of objects as input and returns the user whoes age >18 and are male
function checking(user) {
  let result = [];
  for (let i = 0; i < user.length; i++) {
    if (user[i].age > 18 && user[i].gender == "Male") {
      result.push(user[i].name);
    }
    
  }
  return result;
}
var user = [
  {
    name: "Manish",
    age: 21,
    gender: "Male",
  },
  {
    name: "Raj",
    age: 19,
    gender: "Male",
  },
  {
    name: "Priya",
    age: 19,
    gender: "Female",
  },
];

let Output = checking(user);
console.log(Output);
