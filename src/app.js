const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/user", (req, res) => {
  res.send([{ name: "Ghanshyam Tanchak" }]);
});

app.post("/user", (req, res) => {
  res.send("Post call success");
});

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});
