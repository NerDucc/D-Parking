require('dotenv').config({path: "./config.env"});
const express = require("express");

const app = express();

const connectDB = require("./config/db");

//Connect to DB 
connectDB();
app.use(express.json());

app.use('/api/auth', require('./routes/auth.route'));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
  });