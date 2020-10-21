const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const users = require("./app/users");
const products = require("./app/products");
const categories = require("./app/categories");
const config = require("./config");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

mongoose.connect(`${config.db.url}/${config.db.name}`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Mongoose connected");
    app.use("/products", products());
    app.use("/categories", categories());
    app.use("/users", users());
    app.listen(PORT, () => {
      console.log("Server started at http://localhost:" + PORT);
    });
  });





