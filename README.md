# NewsBuster

## Getting Started

### Clone our project

    $ git clone https://github.com/UQdeco3500/NewsBusters.git
    $ unzip NewsBusters
    $ cd NewsBusters

### Build the SQL database
Build the SQL database through docker-compose.yml by docker

    $ docker-compose -d docker-compose.yml up -d

### Update library

    $ npm i mysql2@2.3.3
    $ sudo npm i -g forever

### Set up and check server

    $ forever start backend/server.js
    $ forever list

