// const fs = require("fs");
import fs from "fs";

// Load JSON file
let data = JSON.parse(fs.readFileSync("./app.json", "utf8"));

// Remove specific keys
const columnsToDelete = [
  "discountPercentage",
  "returnPolicy",
  "tags",
  "sku",
  "weight",
  "dimensions",
  "warrantyInformation",
  "shippingInformation",
  "stripeId",
  "minimumOrderQuantity",
  "meta",
  "availabilityStatus",
];
console.log(data);
data = data.products.map((item) => {
  columnsToDelete.forEach((key) => delete item[key]);
  return item;
});

// Save the modified JSON
fs.writeFileSync("data_modified.json", JSON.stringify(data, null, 2));
