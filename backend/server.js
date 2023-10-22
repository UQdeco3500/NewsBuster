
const express = require('express');
const path = require("path");
const mysql = require('mysql2');
const socketIo = require('socket.io');

const app = express();

const http = require('http').Server(app);

const io = socketIo(http);


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./frontend"));
app.use(express.static('./frontend'))

const db = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'bezkoder_db',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});



io.on('connection', (socket) => {
  console.log('A client has connected');

  // Handle the database data emission here
  socket.on('requestDatabaseData', () => {
    // Query the database and emit the data
    db.query('SELECT * from arts', (err, results) => {
      if (!err) {
        // Emit the data to the specific client
        console.log(results)
        socket.emit('databaseData', results);
      }
    });
  });


  socket.on('userData',userData=>{

    db.query('UPDATE arts SET user_count = ?, width = ? WHERE id = ?', [userData.user_count + 1, userData.width + 1, userData.id], (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
      } else {
        // Emit an event to notify connected clients about the data update
        console.log('Upload!!!')
      }
    });

  });
});



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


// app.listen(8080, () => {
//     console.log("LISTENING ON PORT 8080");
//   });
  
http.listen(8080, () => console.log(`Listening on port ${8080}`));
