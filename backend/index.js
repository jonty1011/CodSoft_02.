const express = require("express");
const dotenv = require("dotenv");
const app =express();
const port = process.env.PORT || 3500
dotenv.config();

const ConnectDB = require("./config/db");
const TaskRouter = require("./Routes/TaskRouter");
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use("/api/tasks", TaskRouter);
app.listen(port,()=>{
  console.log(`Port is running on ${port}`);
  ConnectDB();
});