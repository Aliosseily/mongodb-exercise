console.log('May Node be with you')

const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://wars-quotes:ali123ali@ds111410.mlab.com:11410/quotes', (err, client) => {
  if (err) return console.log(err)
  db = client.db('') 
  app.listen(3001, () => {
    console.log('listening on 3000')
  })
})

const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    
    res.redirect('/')
  })
})
app.get('/show', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
// app.get('/', function(req, res) {
//     res.send('Hello World')
//   })

  // app.get('/', (req, res) => {
  //   res.sendFile(__dirname + '/index.html')
  // })

  // app.post('/quotes', (req, res) => {
  //   console.log(req.body)  })

     

    
    

    

   
 
    
   


