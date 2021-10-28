let router = require('express').Router();

// set default set Response
router.get('/', function(req, res){
    res.json({
        status: 'Success',
        message: 'Data Mahasiswa Berhasil di Dapat'
    });
});

const { prototype } = require('module');
var MahasiswaController = require('./mahasiswaController');

// daftar router
router.route('/mahasiswa')
.get(MahasiswaController.index)
.post(MahasiswaController.new);


router.route('/mahasiswa/:mahasiswa_id')
.get(MahasiswaController.view)
.put(MahasiswaController.ubah)
.delete(MahasiswaController.hapus);

module.exports = router;