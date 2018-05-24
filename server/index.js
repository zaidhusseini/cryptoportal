const path = require('path');

const express = require('express');
const app = express();
const PUBLIC_DIRECTORY = path.join(__dirname, '../client/dist')

app.use(express.static(PUBLIC_DIRECTORY));

const PORT = process.env.PORT || 2000;

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`))