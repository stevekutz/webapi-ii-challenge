// implement your API here
const express  = require("express");
const db = require("./data/db.js");
const port = 4003;    // CHANGED  this !!!
const API = "/api/users";

const server = express();   // this creates express application !!!!! 

server.use(express.json());   // DONT FORGET THIS !!!!!

// GET post obj array




// GET post obj with specific id



// GET all comments of post obj with specific id



// POST create new post from as packaged via request body



// POST create new comment for post obj with speific id as packaged via request body



// DELETE(tricky,extra calls!) Removes post with specified id and RETURNS deleted post 



// PUT updates post with specific id as packaged via request body, return UPDATED post array
        // Object.assign  NOT spread !!!!






server.listen(port,() => {
    console.log(`\n Server running on http://localhost:${port} \n`);
});