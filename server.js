const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/quotes', (req, res)=>{
    console.log(req.body)
})

const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
  console.log('listening on port 3000');
});

