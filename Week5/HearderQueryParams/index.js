const express =require('express');
const app =express();
const port = 3000;
// app.get("/sum",function(req, res) {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   res.json({
//     answer: a+b
//   })
// })

// app.get("/multiply",function(req, res) {
//  const a = req.query.a;
//   const b = req.query.b;
//   res.json({
//     answer: a*b
//   })
// })

// app.get("/divide",function(req, res) {
//  const a = req.query.a;
//   const b = req.query.b;
//   res.json({
//     answer: a/b
//   })
// })

app.get("/sum/:a/:b",function(req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.json({]
    answer: a+b
  })
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});