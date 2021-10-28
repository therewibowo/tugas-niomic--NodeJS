var mongoose = require('mongoose');

var biodataSchema = mongoose.Schema({

     nama : {
        type : String,
        required : true,
    },
    tanggalLahir : {
        type : String,
        required : true,
    },
    jenisKelamin : String,
      hobi: String,

    create_date : {
        type : Date,
        default : Date.now
    }

});

var Biodata = module.exports = mongoose.model('biodata',biodataSchema );

module.exports.get = function (callbak, limit){
    Biodata.find(callbak).limit(limit);
}
