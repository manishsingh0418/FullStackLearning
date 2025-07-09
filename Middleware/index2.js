const express = require('express');
const app = express();

// Middleware to check if user is old enough
function isOldEnoughMiddleware(req, res, next) {
  const age = Number(req.query.age);

  if (!age) {
    return res.status(400).json({ msg: "Age is required and must be a number" });
  }

  if (age >= 14) {
    next();
  } else {
    res.status(400).json({
      msg: "You are not old enough"
    });
  }
}

// Route for ride1
app.get('/ride1', isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully riding ride 1"
  });
});

// Route for ride2
app.get('/ride2', isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully riding ride 2 manish"
  });
});

// Start the server
app.listen(3000, () => {
  console.log("✅ Server is running on http://localhost:3000");
});
