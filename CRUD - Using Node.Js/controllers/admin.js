const Product = require("../models/products");

exports.getAdminProductList = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("product_list", {
        pageTitle: "Products List",
        products: rows,
        isAdminPage: req.originalUrl === "/admin/manage-details",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred while fetching the products");
    });
};

exports.deleteProduct = async (req, res, next) => {
  const productId = req.params.id;

  try {
    const rows = await Product.findById(productId);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No product Found" });
    }

    const product = rows[0];

    await Product.deleteById(productId);

    res
      .status(200)
      .json({ message: "record deleted Successfully", product: product });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the product" });
  }
};

exports.getEditProduct = async (req, res, next) => {
  const productId = req.params.id;

  try {
    const rows = await Product.findById(productId);

    if (rows.length === 0) {
      res.status(404).json({ message: "no products found " });
    }

    const product = rows[0];

    console.log("Fetched product:", product); // Add this line

    res.render("form", {
      pageTitle: "Edit Product",
      product : product[0],
      buttonAction: "Update Details ",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while fetching the product");
  }
};

exports.updateProduct = (req, res, next) => {
  const productId = req.body.id;
  const updatedName = req.body.nameOfTheProduct;
  const updatedPrice = req.body.priceOfTheProduct;
  const updatedQty = req.body.qty;

  console.log(
    `Updating product with ID: ${productId}, Name: ${updatedName}, Price: ${updatedPrice}, Qty: ${updatedQty}`
  ); // Debug log

  Product.updateById(productId, updatedName, updatedPrice, updatedQty)
    .then(() => {
      res.redirect("/product_list"); // Redirect after updating
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred while updating the product");
    });
};
