const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());



// const logger = require("./startup/logging");
// const compression = require('compression');
// app.use(compression({ level: 9 }));

require('./config/routes')(app, express, path);
require('./db/dbConnection')();
// require('./startup/config')();

if (process.env.NODE_ENV === 'production') {
	require('./startup/prod')(app);
} else {
	// require('./startup/seed')();
}


const port = process.env.PORT || 3200;
app.listen(port, () => console.log(`Listening on port ${port}...`));
// app.listen(port, () => logger.info(`Listening on port ${port}...`));