let express = require('express');

let bodyParser = require('body-parser');

let mongodb = require('mongoose');

let app = express();

// jalankan api route
let apiRoutes = require('./router');


app.use(bodyParser.urlencoded({
    extended : true,
}));

app.use(bodyParser.json());

mongodb.connect('mongodb://localhost/tugas_akhir');

var db = mongodb.connection;

// setup port
var port = process.env.port || 8000;

app.get('/', (req, res)=> res.send('Hello Word with express Port'));

app.use('/api', apiRoutes);

app.listen(port, function(){
    console.log("Tugas Akhir berjalan di port "+port );
});