const fs = require("fs");
function afterFileRead(err,data){
console.log(data);
}

fs.readFile("a.txt", "utf-8",afterFileRead);