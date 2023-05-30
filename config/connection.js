const mongoose = require("mongoose");

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);


module.exports = mongoose.connection;