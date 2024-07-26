const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(userRoutes);
app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.send("<h1> Sorry page not found </h1>");
});

app.listen(3000);
