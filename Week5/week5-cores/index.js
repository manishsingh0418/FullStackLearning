const express= require('express');
const app = express();
const cors =require("cors")
app.use(cors());  // this will allow every frontend domain to access the files 

app.use(express.json());
app.post('/sum', (req, res) => {
 const a= parseInt(req.body.a)
 const b = parseInt(req.body.b);
 const sum=a+b;
 res.json({sum});
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});