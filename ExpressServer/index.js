const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/add", (req, res) => {
  const { num1, num2 } = req.query;
  const result = Number(num1) + Number(num2);
  res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) * Number(num2);
  res.send(`The product of ${num1} and ${num2} is ${result}`);
});

app.get("/negative/:number", (req, res) => {
  const { number } = req.params;
  const result = -Number(number);
  res.send(`The negative of ${number} is ${result}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});