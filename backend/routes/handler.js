const express = require('express');
const router = express.Router();

router.get('/table', (req, res) => {
    const str = [
        {
            "name": "Ella",
            "msg": "Message!",
            "username": "_ella"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addEntry', (req, res) => {
    res.end('NA');
});

module.exports = router;