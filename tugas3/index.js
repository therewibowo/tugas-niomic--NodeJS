let express = require('express');

let bodyParser = require('body-parser');

let mongoose = require('mongoose');

// go app
let app = express();

// panggil api-routes
let apiRoutes = require('./rest-route');

app.use(bodyParser.urlencoded({
    extended : true,
}));

app.use(bodyParser.json());

// koneksi database
mongoose.connect('mongodb://localhost/tugas2');

var db = mongoose.connection;

var port = process.env.PORT || 8080;

app.get('/',(req, res)=> res.send('Hello World dengan express'));

app.use('/api', apiRoutes);

app.listen(port, function(){
    console.log("Running tugas on Port " + port);
});