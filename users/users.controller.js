const express = require('express');
const router = express.Router();
const userServices = require("./users.services")

router.post('/authenticate', authenticate);
router.get('/', getAll);

module.exports = router;

function authenticate(req, res, next) {
    userServices.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next)
}

function getAll(req, res, next) {
    userServices.getAllUsers()
        .then(users => res.json(users))
        .catch(next)
}