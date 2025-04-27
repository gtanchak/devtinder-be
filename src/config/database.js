const { mongoose } = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ghtanchak77:YH4DlXUm0c0pyQk9@namastenode.ygp91hm.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
