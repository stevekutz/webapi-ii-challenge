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
      const posts = await Hubs.find(req.query);
      res.status(200).json(posts);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the posts',
      });
    }
  });

// GET post obj with specific id



// GET all comments of post obj with specific id



// POST create new post from as packaged via request body



// POST create new comment for post obj with speific id as packaged via request body



// DELETE(tricky,extra calls!) Removes post with specified id and RETURNS deleted post 



// PUT updates post with specific id as packaged via request body, return UPDATED post array
        // Object.assign  NOT spread !!!!





// MUST EXPORT
module.exports = router;