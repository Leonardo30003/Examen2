
const express=require('express'),
    router=express.Router()
    producto=require('../controllers/productoController');
    cliente=require('../controllers/clienteController');
    venta=require('../controllers/ventaController');

router.use('/producto',producto);
router.use('/cliente',cliente);
router.use('/venta',venta);
module.exports=router;
