const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = "./data.json";

// Handle form submission
app.post("/submit", (req, res) => {
  const formData = req.body;

  // Read existing data
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    let jsonData = [];
    if (!err && data) {
      jsonData = JSON.parse(data);
    }

    // Append new data
    jsonData.push(formData);

    // Save to JSON file
    fs.writeFile(FILE_PATH, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        res.status(500).send("Error saving data");
      } else {
        res.status(200).send("Data saved successfully");
      }
    });
  });
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
