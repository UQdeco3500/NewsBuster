
const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./frontend"));
app.use(express.static('./frontend'))


app.get('/', (req, res) => {
  res.send('Hello, Docker!');
})

app.get('/map', (req, res) => {
  res.render('map.html');
})

// Handle file upload
// app.post('/upload', upload.single('image'), (req, res) => {
//   console.log('Image uploaded successfully');
// });


app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
  });
  
  