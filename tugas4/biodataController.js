const biodataModel = require('./biodataModel');

// requies Model
Biodata = require('./biodataModel');

exports.index = function(req, res){
    Biodata.get(function (err, bio_data){
        if (err) {
            res.json({
                status : "error",
                message: err,
            });
        }

        res.json({
            status: "Success",
            message : "Biodata berhasil retrived ",
            data : bio_data

        });
    });
};

// fungsi tambah
exports.new = function (req, res) {
   
    var biodata = new Biodata();
    biodata.nama = req.body.nama ? req.body.nama  : biodata.nama;
    biodata.tanggalLahir = req.body.tanggalLahir;
    biodata.jenisKelamin = req.body.jenisKelamin;
    biodata.hobi = req.body.hobi;
 
    biodata.save(function (err){
        // if(err)
        // res.json(err);
        
        res.json({
            message: "biodata berhasil di buat",
            data: biodata
        });
    });
};

//controller untuk view
exports.view = function(req, res){
    Biodata.findById(req.params.biodata_id, function(err, biodata){
        if (err)
        res.send(err);
        res.json({
            message : 'Data Siswa berhasil di Ambil ...',
            data : biodata
        });
    });
};

exports.update = function(req, res){
    Biodata.findById(req.params.biodata_id, function(err, biodata){
        if (err)
        res.send(err);

        biodata.nama = req.body.nama ? req.body.nama : biodata.nama;
        biodata.tanggalLahir = req.body.tanggalLahir;
        biodata.jenisKelamin = req.body.jenisKelamin;
        biodata.hobi = req.body.hobi;

        biodata.save(function (err) {
            if (err)
            req.json(err);
            res.json({
                message: 'Siswa Berhasil Terupdate ..',
                data : biodata
            });
        });
    });
};

// controller delete
exports.hapus = function(req, res){
    Biodata.remove({
        _id : req.params.biodata_id
    },
    function (err, biodata) {
        if (err)
        res.send(err);

        res.json({
            status : 'success',
            message : 'Data berhasil di hapus'
        });
    });
}