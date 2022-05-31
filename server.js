const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});

