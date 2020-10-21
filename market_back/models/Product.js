const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: String,
  image: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;