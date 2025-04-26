const express = require("express");
const { connectDB } = require("./config/database");

const PORT = process.env.PORT || 3000;

const app = express();

connectDB()
  .then(() => {
    console.log("Database connection successfully..");
    app.listen(PORT, () => {
      console.log(`Server is running successfully on PORT ${PORT}`);
    });
  })
  .catch(() => console.log("Databse connection error"));
