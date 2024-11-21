import fs from "fs";

// Load the JSON file
let data = JSON.parse(fs.readFileSync("app.json", "utf8"));

// Add new column (key) to each object
data = data.map((item) => ({
  ...item,

  numberOfReviews: item.reviews ? item.reviews.length : 0, // Add the new key-value pair
}));

// Save the updated JSON back to the file
fs.writeFileSync("data_modified.json", JSON.stringify(data, null, 11));

console.log("Column added successfully!");
