const mongoose = require("mongoose");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/real-chatter")


module.exports = mongoose.connection;
