const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Muammolar</h1><a href="/">Bosh sahifa</a>');
});

module.exports = router;