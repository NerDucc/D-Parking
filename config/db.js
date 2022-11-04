const mongoose = require("mongoose");

const connectDB = async () => {
//   await mongoose.connect(process.env.DATABASE_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: true,
//   });
  
    await mongoose.createConnection(process.env.DATABASE_CONNECTION).asPromise();
  console.log("MongoDB Connected");
};

module.exports = connectDB;