const express = require('express');
require('dotenv').config();

const hostName = process.env.HOST_NAME;
// import express from 'express'
const app = express();
const port = process.env.PORT || 8080;
const config = require('./config/viewEnginer');
const webRouter = require('./routers/web')

app.use(express.json())
app.use(express.urlencoded({  extended : true}))
config(app);
app.use('/', webRouter)


app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`)
})