const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", (req, res) => {
  console.log(req, "req");
  res.send("User from the server.");
});

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});
