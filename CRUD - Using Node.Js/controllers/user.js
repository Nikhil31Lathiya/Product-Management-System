const Product = require("../models/products");

exports.indexPage = (req, res, next) => {
  res.render("form", {
    pageTitle: "ShopForm",
    buttonAction: "Click here to submit",
    product: null,
  });
};

exports.postProduct = (req, res, next) => {
  const productName = req.body.nameOfTheProduct;
  const productPrice = req.body.priceOfTheProduct;
  const qty = req.body.qty;
  const obj = new Product(productName, productPrice, qty);
  obj
    .save()
    .then(() => {
      res.redirect("/product_list"); // Redirect to the GET route after saving
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred while saving the product");
    });
};

exports.getProductList = (req, res, next) => {
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
