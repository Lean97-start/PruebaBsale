require('dotenv/config');
const { router } = require("./src/Routes");
const express = require('express');
const {initDB} = require('./src/Config/MySql');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4105;

const app = express();
initDB();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use((req: any, res: any, next:any) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log("Listenning on the port", PORT)
})

