const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(7777, () => {
    console.log("Server listening on port 7777");
});

const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

module.exports = app;

