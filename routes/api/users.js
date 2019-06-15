const express = require('express');
const router = express.Router();

// localhost:5004/api/users/test
router.get('/test', (req, res) => res.json({msg: 'User works!'}));

// exports the router variable for use in project
module.exports = router;