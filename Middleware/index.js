const express = require("express");
const app = express();

function isOldEnough(age) {
  return age >= 14;
}

app.get("/ride1", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      message: "You have successfully riding ride 1",
    });
  } else {
    res.status(411).json({
      message: "You are not old enough to use this service",
    });
  }
});

app.get("/ride2", function (req, res) {
  if (isOldEnough(req.query.age)) {
    res.json({
      message: "You have successfully riding ride 2",
    });
  } else {
    res.status(411).json({
      message: "You are not old enough to use this service",
    });
  }
});

app.listen(3000, () => {
  console.log("Server Started on port 3000");
});
[]                                        