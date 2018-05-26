const express = require('express');
const app = express();
const router = express.Router();
const pricesRouter = require('./pricesRouter.js')

const axios = require('axios');

router.use('/prices', pricesRouter);

module.exports = router;