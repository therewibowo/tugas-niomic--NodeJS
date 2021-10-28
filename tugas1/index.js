let express = require('express');

// go app
let app = express();

// panggil api-routes
let apiRoutes = require('./rest-route');

var port = process.env.PORT || 8080;

app.get('/',(req, res)=> res.send('Hello World with express'));

app.use('/api', apiRoutes);

app.listen(port, function(){
    console.log("Running tugas on Port " + port);
});