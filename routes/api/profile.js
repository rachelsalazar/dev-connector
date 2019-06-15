const express = require('express');
const router = express.Router();

// localhost:5004/api/profile/test
router.get('/test', (req, res) => res.json({msg: 'Profile works!'}));

// exports the router variable for use in project
module.exports = router;