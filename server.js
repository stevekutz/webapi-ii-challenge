// server.js

const express = require('express'); // creates express app

// ADD this here after creating data-router.js
const PostsRouter = require('./data/posts-router.js');

const server = express();   // this creates express application !!!!! 
server.use(express.json());   // DONT FORGET THIS !!!!!

// ADD this - anything that starts with api/posts will then be referenced in PostsRouter
// to find full route path
server.use('/api/posts', PostsRouter );    // defines router endpoint


server.get('/', (req, res) => {
    res.send(`
      <h2>We got some posts to mess with !!!</h2>
    `);
  });


// this EXPORTS server.js
module.exports = server;