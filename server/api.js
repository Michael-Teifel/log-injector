// This file is the API Sever.
require('dotenv').config();


const express = require('express');
const app = express();
const path = require('path');

const HOST = process.argv[2];
const PORT = process.argv[3];

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('__dirname', '..', 'client', 'build', 'index.html'));
})

app.get('/bundle.js', (req, res) => {
  res.status(200).sendFile(path.resolve('__dirname', '..', 'client', 'build', 'bundle.js'));
})

const logItemController = require('./controllers/log_item_controller');

app.post('/log_item', 
  logItemController.create, 
  (req, res) => {
    res.status(200).send('Item Logged')
  }
);

// 404 Errors for Pages Not Found
app.use((req, res) => {
  res.status(404).send('Page not Found');
});

// Global Error Handler
app.use((err, req, res, next) => {
  defaultError = {
    log: 'An unkown Error Occured in React MiddleWare',
    message: 'An error occurred'
  }

  defaultError = {
    ...defaultError,
    log: err.log
  }
  console.log(defaultError.log);
  res.status(400).send(defaultError.message)
});

app.listen(PORT, HOST, () => {
  console.log(`log-injector-api listening on ${PORT}`);
})