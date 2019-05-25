// implement your API here
// const express  = require("express");
// const db = require("./data/db.js");


const server = require('./server.js');
const port = 4003;    // CHANGED  this !!!

server.listen(port,() => {
    console.log(`\n Server running on http://localhost:${port} \n`);
});