import "reflect-metadata";
import { createConnection } from "typeorm";

import router from './routes';

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3333;

createConnection().then(() => {
    console.log('Database successfully connected.');
}).catch(error => console.log(error));

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port);
