const express = require("express");
const multer = require("multer");
const path = require("path");
const auth = require("../middleware/auth");
const {nanoid} = require("nanoid");
const Product = require("../models/Product");
const config = require("../config");
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const createRouter = () => {
    router.get("/", async (req, res) => {
        let category;
        if (req.query.category) {
            category = {category: req.query.category};
        }
        try {
            const products = await Product.find(category)
                .populate("user", "display_name phone_number").populate("category")
            res.send(products);
        } catch (e) {
            res.sendStatus(500)
        }
    });
    router.get("/:id", async (req, res) => {
        try {
            const product = await Product.findById(req.params.id)
                .populate("category").populate("user", "-token");
            res.send(product);
        } catch (e) {
            res.sendStatus(404)
        }
    });
    router.post("/", [upload.single("image"), auth], async (req, res) => {
        const product = new Product(req.body);
        if (req.file) {
            product.image = req.file.filename;
        }
        product.user = req.user._id;
        try {
            await product.save();
            res.send(product);
        } catch (e) {
            res.status(400).send({error: e})
        }
    });
    router.delete("/:id", auth, async (req, res) => {
        const product = await Product.findById(req.params.id)
        if ((req.user._id).toString() === (product.user).toString()) {
            try {
                res.send(await Product.findByIdAndRemove(req.params.id));
            } catch (e) {
                res.status(500).send(e)
            }
        } else {
            res.status(403).send({message: "its not your product"})
        }
    });

    return router;
}


module.exports = createRouter;