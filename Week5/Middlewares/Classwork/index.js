const express = require('express');
const app =express();
const port = 3000;
let requestCount = 0;
function requestIncreaser(req,res,next){
    requestCount = requestCount +1;
    //changing the request object
    req.name="Manish"

    if(req.body.cookie==="google"){
        next();
    }
    else {

    
    console.log("Total number of requests "+ requestCount);
    
    // call the next middleware or route handler
    //next();


    // Ending the request response cycle
    res.json({
        message:"   I ended the request early"
    });
}
}

function realSumHandle(req,res){
    // main logic of the sum
    const a =parseInt(req.query.a);
    const b = parseInt(req.query.b);
    //middleware changes the request object
  //  console.log(req.name);
    res.json({
        ans:a+b,
    });
}
// app.get("/sum", requestIncreaser, realSumHandle);
app.use(requestIncreaser);// It will run for all the routes.All the routes after this middleware will automatically add this middleware .If there is some code  above it it will not use 
app.get("/sum", realSumHandle);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});