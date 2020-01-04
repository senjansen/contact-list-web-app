const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/api');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => console.log(`app listening to port ${port}!`));