const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());



require('./config/routes')(app, express, path);
require('./db/dbConnection')();


const port = process.env.PORT || 3200;
app.listen(port, () => console.log(`Listening on port ${port}...`));
// app.listen(port, () => logger.info(`Listening on port ${port}...`));