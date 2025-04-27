const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const PORT = process.env.PORT || 3000;

const app = express();
// Convert JSON to js object
app.use(express.json());

app.post("/signup", (req, res) => {
  const user = new User(req.body);
  try {
    user.save();
    res.send("User created successfully.");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection successfully..");
    app.listen(PORT, () => {
      console.log(`Server is running successfully on PORT ${PORT}`);
    });
  })
  .catch(() => console.log("Databse connection error"));
