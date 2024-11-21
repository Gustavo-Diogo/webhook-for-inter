const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", function (req, res) {
  console.log(req.body);
  res.send("thanks");
});

app.listen(3000, () => {
  console.log("listening here");
});
