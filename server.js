const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000 ;

// app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const connect = 'mongodb+srv://angelosgian:kyX8mjtH516j29Pa@cluster0.hxcp0.mongodb.net/?retryWrites=true&w=majority'

// MongoClient.connect(connect, (err, client) => {
//   if(err) return console.log(err);
//   console.log('Connected to mongoDB');

// })
MongoClient.connect(connect)
    .then(client => {
        console.log('Connected to mongoDB');
        const db = client.db('star-wars-quotes');
        const collections = db.collection('quotes');
        app.use(express.static('public'))
        // app.use(bodyParser.urlencoded({extended: true}))
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))


        app.get('/', (req, res)=> {
            // res.sendFile(__dirname + '/public/index.html')
            collections.find().toArray()
            .then(results => {
              // console.log(results)
              res.render('index.ejs', {quotes: results})
            })
            .catch(err => console.error(err))
          })

        app.post('/quotes', (req, res) => {
              collection.insertOne(req.body)
                .then(result => {
                  // console.log(result)
                  res.redirect('/')
                })
                .catch(error => console.error(error))
            })
        app.put('/quotes', (req, res) => {
          console.log(req.body)
          collections.findOneAndUpdate(
            {name: 'Yoda'},
            update,
            options
            )
            .then(result => {
              res.json('Success')
            })
            .catch(error => console.error(error))
        })
        app.listen(PORT, () => {
          console.log(`It's alive on port ${PORT}`);
        });  
    
    
    })
    .catch((err) => {console.log(err)})
