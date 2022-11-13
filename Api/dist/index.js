"use strict";
require('dotenv/config');
const { router } = require("./src/Routes");
const express = require('express');
const { initDB } = require('./src/Config/MySql');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4105;
const app = express();
initDB();
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log("Listenning on the port", PORT);
});
