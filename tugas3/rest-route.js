let router = require('express').Router();

// set default set Response

router.get('/',function(req, res){
    res.json({
        Nama : "Richard Muhamad",
        TanggalLahir : "14 Januari 1994",
        JenisKelamin : "Laki-laki",
        Hobi : "Membaca Buku "

    });
});

var BiodataController = require('./biodataController');

// panggil routes
router.route('/biodata')
.get(BiodataController.index)
.post(BiodataController.new);


router.route('/biodatax/:biodata_id')
.get(BiodataController.view)
.put(BiodataController.update);
// .delete(BiodataController.hapus);

module.exports = router;
