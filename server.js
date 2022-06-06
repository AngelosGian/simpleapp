const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000 ;

const connect = 'mongodb+srv://angelosgian:kyX8mjtH516j29Pa@cluster0.hxcp0.mongodb.net/?retryWrites=true&w=majority'

// MongoClient.connect(connect, (err, client) => {
//   if(err) return console.log(err);
//   console.log('Connected to mongoDB');

// })
MongoClient.connect(connect)
    .then(client => {
        console.log('Connected to mongoDB');
        const db = client.db('star-wars-quotes');
        const collection = db.collection('quotes');
    
        // app.use(bodyParser.urlencoded({extended: true}))
        app.use(express.urlencoded({extended: true}))


        app.get('/', (req, res)=> {
            res.sendFile(__dirname + '/public/index.html')
        })

        app.post('/quotes', (req, res)=>{
            console.log(req.body)
        })



        app.listen(PORT, () => {
          console.log(`It's alive on port ${PORT}`);
        });  
    
    
    })
    .catch(err => console.log(err));
