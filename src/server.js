const express = require('express');
require('dotenv').config();

const hostName = process.env.HOST_NAME
// import express from 'express'
const app = express();
const port = process.env.PORT || 8080;
const config = require('./config/viewEnginer');
const webRouter = require('./routers/web')
config(app);
app.use('/', webRouter)



app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`)
})