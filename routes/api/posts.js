const express = require('express');
const router = express.Router();

// localhost:5004/api/posts/test
router.get('/test', (req, res) => res.json({msg: 'Posts works!'}));

// exports the router variable for use in project
module.exports = router;