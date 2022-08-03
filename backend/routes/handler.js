const express = require('express');
const router = express.Router();

router.get('/table', (req, res) => {
    const str = [
        {
            "ID": 1,
            "name": "Ella",
            "msg": "Message!",
            "username": "_ella"
        },
        {
            "ID": 2,
            "name": "John",
            "msg": "Message2!",
            "username": "_john"
        },
        {
            "ID": 3,
            "name": "Mia",
            "msg": "Message3!",
            "username": "_Mia"
        }
    ];
    res.end(JSON.stringify(str));
});

router.post('/addEntry', (req, res) => {
    res.end('NA');
});

module.exports = router;