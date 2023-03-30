const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')

  const fs = require('fs');

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
//   res.send(data);
});

// res.send(<h1>My Test is big!</h1>);
//   res.json([{hello: "Hi im am an object from api"},{hello: "Hi im am an object from api"}])
})
app.get('/detail', function (req, res) {
    res.send('Hello from api in detial')
  })

app.listen(3000,()=>{
    console.log("you project is running on port: 3000")
});