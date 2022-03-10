const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors")
let tasks = require('./routes/tasks/index');
let users = require("./routes/users/index");

mongoose
  .connect(process.env.MONGODB_ATLAS_URL)
  .then(() => {
    console.log("connected succesfully");
  })
  .catch((err) => {
    console.log("problem in connected", err.message, err);
  });

app.use("/images", express.static(path.join("images")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept,Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,POST,PUT,PATCH,DELETE,OPTIONS"
//   );
//   next();
// });

app.set(port, port);
app.use("/tasks/", tasks);
app.use("/users/", users);
app.listen(port, () => {
  console.log("port is runnning");
});
