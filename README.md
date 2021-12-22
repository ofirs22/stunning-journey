# stunning-journey

# here we can excersize our coding skills in any language

we start with nodejs and add languages as we go.
hopefully we will air some projects that will meen something eventualy

 we should install node from https://nodejs.org/en/ 
![image](https://user-images.githubusercontent.com/75007980/147074959-4ba6b8c3-eeef-47b2-8316-7db776c7140d.png)
 and download the version we want (always take the latest stable version)
 To make sure we have node and npm installed we type in terminal node -v and npm -v and should see the versions of both

 After that we should open the terminal and go to the project folder, type npm init in order to create the package.json file, 
 This file includes all project's settings and dependencies
 Every node project should have a folder name node_modules that includes every dependency we install from the npm library, this folder is created when we use  the command npm i (or npm install)

![image](https://user-images.githubusercontent.com/75007980/147078846-46652867-8312-4df4-a026-11f08ba6f6e1.png)

# This is ho the package.json file looks like ☝️

![image](https://user-images.githubusercontent.com/75007980/147079018-81aac322-7a29-4696-8b02-b7e787b4f239.png)

# This is the basic node project structure ☝️
 We can go to https://www.npmjs.com/ to find packages and get information about every package
 
 # Start working with the express framework
 
 we start by going to terminal and type "npm i express", this command will install all express dependencies
 # Entry point to the express app
 By convention we call the entry point of the express app (we declare the entry point when we npm init and the entry point can be found and modified in the   package.json file) index.js or app.js or server.js (i prefer server)
 at the top of this file we require all the project dependencies and middlewares(see in the screenshot below)
 ![image](https://user-images.githubusercontent.com/75007980/147141061-3ab05fcc-3170-4b2d-aa0f-4847ef72069e.png)
 examples of middleware can be cors, loggers, routers,error handlers, etc.
the second part of this file will be to initialize the app constant and use the middleware with app.use like the screenshot below
![image](https://user-images.githubusercontent.com/75007980/147141819-b20ba484-0320-4cb8-be63-d13c5ac27c73.png)

the next part will be the application logic like creating routes, render html, connecting to database etc.
the last part will be to use app.listen method to listen to the port we define like the screenshot below

![image](https://user-images.githubusercontent.com/75007980/147144775-a1508bac-35bb-4700-887d-00fe99a92249.png)

 
