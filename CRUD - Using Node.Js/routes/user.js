const express = require("express");

const userController = require("../controllers/user");
const router = express.Router();

router.get("/", userController.indexPage);
router.get("/product_list", userController.getProductList);
router.post("/product_list", userController.postProduct);

module.exports = router;
