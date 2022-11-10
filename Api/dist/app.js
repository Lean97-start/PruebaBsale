"use strict";
require('dotenv/config');
const { router } = require("./Routes");
const express = require('express');
const { initDB } = require('./Config/MySql');
const cors = require('cors');
const PORT = process.env.PORT || 4105;
const app = express();
initDB();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log("Listenning on the port", PORT);
});
