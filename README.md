# NewsBuster

## Getting Started
 
### Install Docker

    sudo apt-get update
    sudo apt-get install docker.io -y
    sudo groupadd docker
    sudo usermod -aG docker $USER
    newgrp docker 

### Install Node.js and npm
[Reference](https://kinsta.com/blog/how-to-install-node-js/#how-to-install-nodejs-on-linux)

    sudo apt install curl
    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
    Node --version
    npm --version

### Install unzip

    sudo apt install unzip
    
### Clone our project

    git clone https://github.com/UQdeco3500/NewsBusters.git
    unzip NewsBusters
    cd NewsBusters

### Build the SQL database
Build the SQL database through docker-compose.yml by docker

    docker-compose -d docker-compose.yml up -d

### Update library

    npm i mysql2@2.3.3
    sudo npm i -g forever

### Set up and check server

    node backend/server.js

### Access to our application through localhost

[localhost](http://localhost:8080/home.html)
