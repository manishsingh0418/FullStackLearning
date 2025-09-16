// axios vs fetch

// function main(){
//     fetch("https//sum-server.100devs.com/todos")
//     .then (async response=>{
//         const json = await response.json();
//         console.log(json.todos.length);
//     })
// }

// same code using async/await

async function main(){
    const response = await fetch("https://sum-server.100devs.com/todos");
    const json = await response.json();
    console.log(json.todos.length);
}

main();