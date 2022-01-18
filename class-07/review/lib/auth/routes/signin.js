// signin stuff

// what are my dependencies??
const express = require('express');
const basicAuth = require('../middlewares/basicAuth.js');

// Prepare the express app
// const app = express();

const router = express.Router();

router.post('/signin', basicAuth, async (req, res) => {

  let response = {
    id: req.user.id,
    username: req.user.username,
  };

  res.send(response);
});


module.exports = router;
