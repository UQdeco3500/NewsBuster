const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const path = require("path");
const mysql = require('mysql2');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./frontend"));
app.use(express.static('./frontend'))

// const db = mysql.createConnection({
//   host: 'localhost',
//   port: 3307,
//   user: 'root',
//   password: '123456',
//   database: 'bezkoder_db',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//   } else {
//     console.log('Connected to the database');
//   }
// });

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
})


server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
