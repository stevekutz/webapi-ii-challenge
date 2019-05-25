// 1) we MUST add expresss here
const express = require('express');

const Posts = require('./db.js');

// 2) we create router
const router = express.Router();


// 3) since we now have   server.use('/api/posts', PostsRouter);   defined in server.js
// we need to replace all paths 
//   /api/posts >>>>>>>> /

// GET post obj array
router.get('/', async (req, res) => {
    try {
      const posts = await Posts.find(req.query);   // modify Posts to get 500 err 
      res.status(200).json(posts);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        error: 'The posts information could not be retrieved.',
      });
    }
  });

// GET post obj with specific id
router.get('/:id', async (req, res) => {
    try {
      const post = await Posts.findById(req.params.id); // modify Posts to get 500 err
      
      if (post.length) { // HAD to add this to get 404 to show up, was getting 200 & [] for bad id
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'The post with the specified id does not exist' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'The post information could not be retrieved',
      });
    }
  });

// POST create new post from as packaged via request body
router.post('/', async (req, res) => {
    
    const newPost = req.body;  
    
  //  if(newPost.title && newPost.contents) {
    if(newPost.title && newPost.contents) {
      try {
        const post = await Posts.insert(req.body);    // looked in db.js to see that 'insert' needed
        res.status(201).json(newPost);
      } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          error: 'There was an error while saving the post to the database',
        });
      }
    } else {
      res.status(400).json({
        errorMessage: 'Please provide title and contents for the post'
      });
    }
    
  });


// POST create new comment for post obj with speific id as packaged via request body



// DELETE(tricky,extra calls!) Removes post with specified id and RETURNS deleted post 



// PUT updates post with specific id as packaged via request body, return UPDATED post array
        // Object.assign  NOT spread !!!!





// MUST EXPORT
module.exports = router;