//const express = require('express');//commonjs
import express from 'express';
import volunteersRouter from './2-routers/volunteers.router.js';
import help_requestRouter from './2-routers/help_requests.router.js';
import toolRouter from './2-routers/tools.router.js';


const app = express();

app.use(express.json());

app.use('/api/volunteers',volunteersRouter);
app.use('/api/help_requests',help_requestRouter);
app.use('/api/tools',toolRouter);

app.listen(3000, '127.0.0.1', () => {
    console.log(`listening on port http://127.0.0.1:3000`);
});



//// "server": "nodemon 1-server-express.js" ,
