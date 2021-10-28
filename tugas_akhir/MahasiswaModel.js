var mongodb = require('mongoose');

// setup sceham 

var mahasiswaScehma = mongodb.Schema({
    nim : {
        type : String,
        required : true,
    },
    nama : {
        type : String,
        require: true,
    },
    jurusan : String,
    semester : String,
    create_date :{
        type : Date,
        default : Date.now
    }

});

var Mahasiswa = module.exports = mongodb.model('mahasiswa', mahasiswaScehma);

module.exports.get = function(callback, limit){
    Mahasiswa.find(callback).limit(limit);
}