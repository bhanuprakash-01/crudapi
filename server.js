const express = require("express");
const morgan = require("morgan");
const { dbConnection } = require("./config/db");
const cors = require("cors");
const StudentRoutes = require("./routes/students");
const { PORT, NODE_ENV } = require("./config");

const app = express();

let StartServer = async () => {
  /*---------------------------database connection-----------------*/
  dbConnection();
  /*---------------------------end database connection-------------*/
  //?============================middleware section start====================//
  app.use(express.json());
  app.use(cors());
  if (NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  //?============================middleware section end====================//
  //*=================================load routes===================//
  app.use("/api/students/", StudentRoutes);
  //*====================================end routes============================//
  app.listen(PORT, err => {
    if (err) throw err;
    console.log("server running at port number 5000");
  });
};

StartServer();
