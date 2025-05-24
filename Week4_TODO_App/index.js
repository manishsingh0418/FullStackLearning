import express from "express";

const app = express();
//route handlers
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/hell", (req, res) => {
  res.send("Hello World Manish Singh");
});
app.listen(3000); // which port
