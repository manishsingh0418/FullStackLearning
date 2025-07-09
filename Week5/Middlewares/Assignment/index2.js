const express = require("express");

const app = express();
// This is necessary to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());
function logger(req, res, next) {
  console.log(req.method, req.url, new Date().toISOString());
  next();
}
app.use(logger);

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  return res.json({
    ans: a + b,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
