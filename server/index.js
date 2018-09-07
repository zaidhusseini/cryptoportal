const path = require('path');

const express = require('express');
const app = express();
const router = require('./routers/index.js');

const PUBLIC_DIRECTORY = path.join(__dirname, '../client/dist');

app.use(express.static(PUBLIC_DIRECTORY));
app.use(router);

const PORT = process.env.PORT || 2000;

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`))