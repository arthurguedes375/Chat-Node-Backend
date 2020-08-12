const express = require('express');
const routes = express.Router();

const messages = require('./models/message');


routes.get("/messages", (req, res) => {
    messages.load((result, err) => {
        if (err) {
            res.status(500);
            res.json({ message: "Internal Server Error, Try again later!" });
        } else {
            res.status(200);
            res.json(result);
        }
    })
});




module.exports = routes;