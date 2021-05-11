const express = require('express');
const cors = require('cors'); //to allow CORS 
const app = express();
import { router } from './routes';

const port = process.env.PORT || 5000;


app.use(cors());
app.options('*', cors());
app.use(router);
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
