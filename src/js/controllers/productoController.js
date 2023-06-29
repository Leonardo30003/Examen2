const { json } = require("body-parser");
const producto = require("../models/producto");
var Productos=require("../models/producto");
    express=require("express");
    router=express.Router();

router.post('/crearProducto', (req, response) => {
    var body = req.body;
    console.log(body);
    Productos.insertMany({
        nombre: body.nombre,
        descripcion: body.descripcion,
        precio: body.precio,
        cantidadDisponible: body.cantidadDisponible
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
router.post('/editarProducto', (req, response) => {
    var body = req.body;
    Productos.updateMany({
        _id: body.id
    }, {
        $set: {
            nombre: body.nombre,
            descripcion: body.descripcion,
            precio: body.precio,
            cantidadDisponible: body.cantidadDisponible
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
router.post('/editarProductoNombre', (req, response) => {
    var body = req.body;
    Productos.updateOne({
        nombre: body.nombre
    }, {
        $set: {
            nombre: body.nombre,
            descripcion: body.descripcion,
            precio: body.precio,
            cantidadDisponible: body.cantidadDisponible
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
router.post('/eliminarProducto', (req, response) => {
    var body = req.body;
    Productos.deleteOne({
        _id: body.id
    }, {
        $set: {
            nombre: body.nombre,
            descripcion: body.descripcion,
            precio: body.precio,
            cantidadDisponible: body.cantidadDisponible
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
router.post('/listarProducto', async (request, response) => {
    try {
      const productos = await Productos.find();
      console.log("lista de los productos");
      response.status(200).json(productos);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: 'Ocurrió un error al obtener los productos' });
    }
  });
module.exports = router;