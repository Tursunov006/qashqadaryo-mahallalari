const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('<h1>Faollar kabineti</h1><form method="POST"><input name="login"><input name="parol" type="password"><button>Kirish</button></form>');
});

router.post('/login', (req, res) => {
    res.redirect('/');
});

module.exports = router;