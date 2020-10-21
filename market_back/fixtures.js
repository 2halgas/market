const mongoose = require("mongoose");
const config = require("./config");

const Category = require("./models/Category");
const Product = require("./models/Product");
const User = require("./models/User");

mongoose.connect(`${config.db.url}/${config.db.name}`);

const db = mongoose.connection;

db.once("open", async () => {
  try {
    await db.dropCollection("categories");
    await db.dropCollection("products");
    await db.dropCollection("users");
  } catch(e) {
    console.log("Collection were not presented. Skipping drop...");
  }

  const [user, admin, seller] = await User.create({
    username: "user",
    password: "user",
    display_name: "user",
    phone_number: "7778889944"
  }, {
    username: "admin",
    password: "admin",
    display_name: "admin",
    phone_number: "3332221117"
  }, {
    username: "seller",
    password: "seller123",
    display_name: "John Doe",
    phone_number: "+8347775"
    });

  const [serviceCategory, buildingCategory, deviceCategory] = await Category.create({
    title: "Services"
  }, {
    title: "Buildings"
  }, {
    title: "Deviсes"
  })


  await Product.create({
    title: "Cleaning",
    price: 500,
    image: "default.jpg",
    category: serviceCategory._id,
    user: user._id
  }, {
    title: "Room for 1 person",
    price: 110,
    image: "default.jpg",
    category: buildingCategory._id,
    user: admin._id
  }, {
    title: "Mobile phone",
    price: 200,
    image: "default.jpg",
    category: deviceCategory._id,
    user: seller._id
  });


  db.close();
});