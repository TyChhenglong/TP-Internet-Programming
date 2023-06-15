const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect session
require('./configs/session')(app);

// Connect mongodb
require('./configs/db')();

app.use(require('./routes'));

app.use((err, req, res, next) => {
  return res.json({
    success: false,
    code: 0,
    error: err
  })
})


app.listen(process.env.PORT || 3001, () => console.log('App avaiable on http://localhost:3001'))

