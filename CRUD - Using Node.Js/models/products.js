const db = require("../utils/database");

module.exports = class Product {
  constructor(productName, productPrice, qty) {
    this.name = productName;
    this.price = productPrice;
    this.qty = qty;
  }

  save() {
    return db.execute(
      "INSERT INTO product (name, price, qty) VALUES (?, ?, ?)",
      [this.name, this.price, this.qty]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM product");
  }

  static deleteById(id) {
    return db.execute("DELETE FROM product WHERE id = ?", [id]);
  }

  static findById(id) {
    return db.execute("SELECT * FROM product WHERE id = ?", [id]);
  }

  static updateById(id, name, price, qty) {
    return db.execute(
      "UPDATE product SET name = ?, price = ?, qty = ? WHERE id = ?",
      [name, price, qty, id]
    );
  }
};
