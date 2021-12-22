# stunning-journey

#here we can excersize our coding skills in any language

we start with nodejs and add languages as we go.
hopefully we will air some projects that will meen something eventualy

# we should install node from https://nodejs.org/en/ 
![image](https://user-images.githubusercontent.com/75007980/147074959-4ba6b8c3-eeef-47b2-8316-7db776c7140d.png)
# and download the version we want (always take the latest stable version)
# To make sure we have node and npm installed we type in terminal node -v and npm -v and should see the versions of both

# After that we should open the terminal and go to the project folder, type npm init in order to create the package.json file, 
# This file includes all project's settings and dependencies
# Every node project should have a folder name node_modules that includes every dependency we install from the npm library, this folder is created when we use # the command npm i (or npm install)

{
  "name": "casino-project",
  "version": "1.0.0",
  "description": "project description (the same as we define in the npm init)",
  "main": "server.js",
  "scripts": {
    "start": "nodemon start" (what happen when we use the command "npm start"),
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": { #(here we list all dependencies)
    "express": "^4.17.2" #(this is the express dependency),
    "mysql2": "^2.3.3",
    "nodemon": "^2.0.15",
    "sequelize": "^6.12.1"
  }
}
# This is ho the package.json file looks like
# We can go to https://www.npmjs.com/ to find packages and get information about every package
