
import express from "express"

import fs from "fs"

import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = "../public/ItemsObjectData.json";

// Handle form submission
app.post("/submit", (req, res) => {
  const formData = req.body;

  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) {
      console.error("Read error:", err);
      // Initialize empty array if file doesn't exist
      if (err.code === 'ENOENT') data = '[]';
      else return res.status(500).send("Error reading data");
    }

    try {
      let jsonData = JSON.parse(data || '[]');

      const newItem = {
        id: Date.now(),
        namn: formData.productName,
        kategori: formData.selectedCategory,
        skick: formData.selectedCondition,
        beskrivning: formData.productDescription,
        pris: Number(formData.productPrice),
        img: "../assets/fox.jpeg",
        adress: "activeUser.adress",
        säljare: "activeUser.name"
      };

      jsonData.push(newItem);

      fs.writeFile(FILE_PATH, JSON.stringify(jsonData, null, 2), (writeErr) => {
        if (writeErr) {
          console.error("Write error:", writeErr);
          return res.status(500).send("Error saving data");
        }
        res.status(200).send("Data saved successfully");
      });
    } catch (parseErr) {
      console.error("JSON parse error:", parseErr);
      res.status(500).send("Invalid JSON data");
    }
  });
});

app.use(cors({
  origin: "http://localhost:5173",  // Allow your frontend's origin
  methods: "POST, GET, OPTIONS",
  allowedHeaders: "Content-Type"
}));



// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
