const express = require("express");
 cors = require("cors");
const mongoose = require("mongoose");

// enivronment variables
require("dotenv").config();

// creeate express server
const app = express();
const port = process.env.PORT || 5000;

// middleware -cors and parse json
app.use(cors());
app.use(express.json());

// connecting to the database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// my models
const exercisesRouter = require("./routes/exercises.routes");
const usersRouter = require("./routes/users.routes");
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
