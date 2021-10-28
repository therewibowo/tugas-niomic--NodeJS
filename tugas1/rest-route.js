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

module.exports = router;
