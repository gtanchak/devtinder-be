const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/", (req, res, next) => {
  console.log("middle ware");
  if (req.url === "/user") {
    res.send("by middleware");
  } else {
    next();
  }
});

app.get("/user", (req, res, next) => {
  console.log("User request");
  res.send("User request by API");
});

app.get("/post", (req, res, next) => {
  next();
  res.send("post request");
});
app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});
