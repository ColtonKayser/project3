//dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

//port
const PORT = process.env.PORT || 3000;
//database
const PROJECT3_DB = process.env.PROJECT3_DB;

//set decpreciation warnings from mongoose
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//connect to mongo
mongoose.connect(PROJECT3_DB ,  { useNewUrlParser: true});
//error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

//public folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const parksController = require('./controllers/parks.js');
// app.use('/parks', parksController);


app.get('/' , (req, res) => {
  res.send('Hello World!');
});



//listener
app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
})
