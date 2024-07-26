const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/manage-details", adminController.getAdminProductList);
router.delete("/delete-product/:id", adminController.deleteProduct);
router.get("/edit-product/:id", adminController.getEditProduct);
router.post("/update-product", adminController.updateProduct); 

module.exports = router;
