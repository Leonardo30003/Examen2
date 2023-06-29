var Cliente = require("../models/venta");
express = require("express");
router = express.Router();

router.post('/crearVenta', (req, response) => {
    var body = req.body;
    console.log(body);
    Cliente.insertMany({
        nombreProducto: body.nombreProducto,
        cantidad: body.cantidad,
        precio: body.precio,
        fecha: body.fecha
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
    })
        .catch(function (err) {
            console.log(err);
            response.status(500).json("Ocurrio un error al guardar")
        });

});
module.exports = router;
router.post('/editarVenta', (req, response) => {
    var body = req.body;
    Cliente.updateOne({
        _id: body.id 
    }, {
        $set: {
            nombreProducto: body.nombreProducto,
            cantidad: body.cantidad,
            precio: body.precio,
            fecha: body.fecha
        }
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
    })
        .catch(function (err) {
            console.log(err);
            response.status(500).json("Ocurrio un error al guardar")
        });
});

module.exports = router;
router.post('/editarVentaNombre', (req, response) => {
    var body = req.body;
    Productos.updateOne({
        nombreProducto: body.nombreProducto
    }, {
        $set: {
            nombreProducto: body.nombreProducto,
            cantidad: body.cantidad,
            precio: body.precio,
            fecha: body.fecha
        }
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
    })
        .catch(function (err) {
            console.log(err);
            response.status(500).json("Ocurrio un error al guardar")
        });
});
module.exports = router;
router.post('/eliminarVenta', (req, response) => {
    var body = req.body;
    Cliente.deleteOne({
        _id: body.id 
    }, {
        $set: {
            nombreProducto: body.nombreProducto,
            cantidad: body.cantidad,
            precio: body.precio,
            fecha: body.fecha
        }
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
    })
        .catch(function (err) {
            console.log(err);
            response.status(500).json("Ocurrio un error al guardar")
        });
    ;
});
router.post('/listarVenta', async (request, response) => {
    try {
      const productos = await Productos.find();
      console.log("lista de Ventas");
      response.status(200).json(productos);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: 'Ocurrió un error al obtener las Ventas' });
    }
  });
module.exports = router;