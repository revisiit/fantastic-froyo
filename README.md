# Backend for Revisiit

## Getting Started

### Setting up the Project
Move into the backend directory: `cd~/revisiit/fantastic-froyo`

Install the dependencies : `npm install`

## Working on the project 
  Run the development task : `npm start`

  Starts a server running at https://localhost:3000
  
## Database 
By default, the template is configured to connect to a MongoDB database using Mongoose. It can be changed to connect to a Mlab database by replacing the local mongodb url with the url for the mlabdatabase in the dataconfig.js file.

## File Structure 
The backend of revisiit consists of 4 major folders and a server.js file which run the server.

        /models
        /routes
        /controllers
        /database
        
### /models:
       Model folders consists of all the schema for the database, Schema are accessed by other folder using export function in node.js
 
### /routes:
       Consists of Routes to forward the supported requests and any information encoded in request URLs to the appropriate controller functions.
 
### /controllers:
      Controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser. 
      
### /database :
      Contain the database configuration for connecting to the database.
 
