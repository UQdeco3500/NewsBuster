
const multer = require('multer');
const express = require('express');
const path = require("path");
const app = express();

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Uploads will be stored in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, 'instance.png'); // Set unique filenames
  },
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend"));
app.use(express.static('../frontend'))

app.get('/detect', (req, res) => {
  res.render('detect.ejs');
})

// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  console.log('Image uploaded successfully');
});


app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
  });
  
  