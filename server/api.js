// This file is the API Sever.
const express = require('express');
const app = express();
const port = 8000;

app.use((req, res) => {
    console.log('Hello World');
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`log-injector-api listening on #{port}`)
})