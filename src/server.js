// diverse paket som behövs för formulärhantering.
import express from 'express'
import fs from 'fs'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'

import { customAlphabet } from 'nanoid'

// const store = createAccountStore()

const nanoid = customAlphabet('0123456789', 4)
// const newId = Number(customAlphabet('0123456789', 4)());

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootPublicPath = path.join(__dirname, '../public')

//express ser till att de skapas en server för att ta emot formuläret POST
const app = express()

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
  })
)
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')))

// Multer tar hand om filer som läggs in i formuläret, den mellanlandar i multers famn innan den skickas vidare
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(rootPublicPath, 'uploads')
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const id = Number(nanoid())
    cb(null, `${id} + '-' + file.originalname`)
  }
})

const upload = multer({ storage })

const FILE_PATH = path.join(__dirname, '../public/ItemsObjectData.json')

// När submitknappen i formuläret trycks på händer detta
app.post('/submit', upload.array('productImages'), (req, res) => {
  // req är request, alltså de som skickas iväg med POST
  const formData = req.body
  const files = req.files
  // fs kollar så att filen kan läsas in
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Read error:', err)
      return res.status(500).send('Error reading data')
    }
    // skapar ett ID till annonsen som är 4 siffror långt
    try {
      let jsonData = JSON.parse(data || '[]')
      const newId = Number(nanoid())

      const newProductFileName = formData.productName
        ? formData.productName.replace(/[^a-zA-Z0-9åäöÅÄÖ]/g, '_')
        : 'product' ;

      const uploadDir = path.join(rootPublicPath, 'uploads')
      const imgArray = [] // länkar till bilderna ska in i arrayen

      //filerna som läggs till får nya namn
      if (files && files.length > 0) {
        files.forEach((file, index) => {
          const ext = path.extname(file.originalname)
          const newFilename = `${newProductFileName}-${newId}-${
            index + 1
          }${ext}`
          const oldPath = file.path
          const newPath = path.join(uploadDir, newFilename)

          try {
            fs.renameSync(oldPath, newPath)
            imgArray.push(`uploads/${newFilename}`) //lägger till alla i ary
          } catch (renameErr) {
            console.error('kan inte spara filnamn:', renameErr)
            imgArray.push(`uploads/${file.filename}`) // Fallback om det går fel
          }
        })
      }

      // annonsinfon som ska skickas till json-filen
      const newItem = {
        id: newId,
        namn: formData.productName,
        kategori: formData.selectedCategory,
        skick: formData.selectedCondition,
        storlek: formData.selectedSize,
        beskrivning: formData.productDescription,
        pris: Number(formData.productPrice) || 0,
        img: imgArray.length > 0 ? imgArray : ['../assets/fox.jpeg'],
        adress: formData.productAdress,
        säljare: formData.productSeller
      }

      jsonData.push(newItem)

      fs.writeFile(FILE_PATH, JSON.stringify(jsonData, null, 2), (writeErr) => {
        if (writeErr) {
          console.error('Write error:', writeErr)
          return res.status(500).send('Kan inte spara infon')
        }
        res.status(200).send('Annons info sparad')
      })
    } catch (parseErr) {
      console.error('JSON parse error:', parseErr)
      res.status(500).send('Invalid JSON data')
    }
  })
})

// servern körs på port 3000
app.listen(3000, () =>
  console.log('Servern för formulärhantering sker på :  http://localhost:3000')
)
