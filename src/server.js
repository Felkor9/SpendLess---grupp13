import express from "express";
import fs from "fs";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPublicPath = path.join(__dirname, '../public');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(rootPublicPath, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const FILE_PATH = path.join(__dirname, '../public/ItemsObjectData.json');

// Updated /submit endpoint with file upload
app.post("/submit", upload.array('productImages'), (req, res) => {
  
  const formData = req.body;
  const files = req.files;

  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error("Read error:", err);
      return res.status(500).send("Error reading data");
    }

    try {
      let jsonData = JSON.parse(data || '[]');
      const newId = Date.now(); // id för annonsen, tar datum och tid
      
      const newProductFileName = formData.productName
      ? formData.productName.replace(/[^a-zA-Z0-9åäöÅÄÖ]/g, '_')
      : 'product';

        
      const uploadDir = path.join(rootPublicPath, 'uploads');
      const imgArray = []; // länkar till bilderna ska in i arrayen
      

      if (files && files.length > 0) {
        files.forEach((file, index) => {
          const ext = path.extname(file.originalname);
          const newFilename = `${newProductFileName}-${newId}-${index}${ext}`;
          const oldPath = file.path;
          const newPath = path.join(uploadDir, newFilename);

          try {
            fs.renameSync(oldPath, newPath);
            imgArray.push(`uploads/${newFilename}`); //lägger till alla i ary
          } catch (renameErr) {
            console.error("kan inte spara filnamn:", renameErr);
            imgArray.push(`uploads/${file.filename}`); // Fallback om det går fel
          }
        });
      }

    

      const newItem = {
        id: Date.now(),
        namn: formData.productName,
        kategori: formData.selectedCategory,
        skick: formData.selectedCondition,
        storlek: formData.selectedSize,
        beskrivning: formData.productDescription,
        pris: Number(formData.productPrice) || 0,
        img: imgArray.length > 0 ? imgArray : ["../assets/fox.jpeg"] ,
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

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


