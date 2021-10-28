Mahasiswa  = require('./MahasiswaModel');

exports.index = function(req, res){
    Mahasiswa.get(function (err, mahasiswas){
        if (err){
            res.json({
                status : "error",
                message : err,
            });
        }

        res.json({
            status: "Success",
            message: "Data Mahasiswa berhasil di dapat",
            data : mahasiswas
        });
    });
}

//untuk inser
exports.new = function(req, res){
    var mahasiswa = Mahasiswa();

    mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
    mahasiswa.nama = req.body.nama;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.semester = req.body.semester;

    mahasiswa.save(function (err){
        if (err)
        res.json(err)

        res.json({
            message: "Mahasiswa Baru berhasil terdaftar",
            data: mahasiswa
        });
    });
};

// untuk viw data

exports.view = function(req, res){
    Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa){
        if(err)
        res.send(err);
        res.json({
            message: 'Mahsiswa details loading ...',
            data : mahasiswa
        });
   
    });
};

// proses update
exports.ubah = function(req, res){
    Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa){
        if (err)
        res.send(err);

        mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
        mahasiswa.nama = req.body.nama;
        mahasiswa.jurusan = req.body.jurusan;
        mahasiswa.semester = req.body.semester;

        // save data
        mahasiswa.save(function(err){
            if(err)
            req.json(err);
            res.json({
                message : 'Mahasiswa berhasil di update',
                data : mahasiswa
            });
        });
    });
};

// proses delete
exports.hapus = function(req, res){
    Mahasiswa.remove({
        _id : req.params.mahasiswa_id
    },function(err, mahasiswa){
        if (err)
        res.send(err);

        res.json({
            status : 'success',
            message : 'Mahasiswa deleted'
        });
    });
};