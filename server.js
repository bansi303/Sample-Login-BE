const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const jwt = require('./helper/jwt');
const errorHandler = require('./helper/error-handler');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use(jwt());

app.use('/users',require("./users/users.controller"));

app.use(errorHandler);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

