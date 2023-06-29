var Cliente = require("../models/cliente");
express = require("express");
router = express.Router();

router.post('/crearCliente', (req, response) => {
    var body = req.body;
    console.log(body);
    Cliente.insertMany({
        nombres: body.nombres,
        apellidos: body.apellidos,
        edad: body.edad,
        genero: body.genero,
        descripcion: body.descripcion,
        telefono: body.tel
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
router.post('/editarCliente', (req, response) => {
    var body = req.body;
    Cliente.updateOne({
        _id: body.id //que campo voy actualizar
    }, {
        $set: {
            nombres: body.nombres,
            apellidos: body.apellidos,
            edad: body.edad,
            genero: body.genero,
            estadoCivil: body.estadoCivil,
            descripcion: body.descripcion,
            telefono: body.telefono
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
router.post('/editarClienteNombre', (req, response) => {
    var body = req.body;
    Productos.updateOne({
        nombre: body.nombre
    }, {
        $set: {
            nombres: body.nombres,
            apellidos: body.apellidos,
            edad: body.edad,
            genero: body.genero,
            estadoCivil: body.estadoCivil,
            descripcion: body.descripcion,
            telefono: body.telefono
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
router.post('/eliminarCliente', (req, response) => {
    var body = req.body;
    Cliente.deleteOne({
        _id: body.id //que campo voy actualizar
    }, {
        $set: {
            nombres: body.nombres,
            apellidos: body.apellidos,
            edad: body.edad,
            genero: body.genero,
            estadoCivil: body.estadoCivil,
            descripcion: body.descripcion,
            telefono: body.telefono
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
router.post('/listarCliente', async (request, response) => {
    try {
      const productos = await Productos.find();
      console.log("lista de clientes");
      response.status(200).json(productos);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: 'Ocurrió un error al obtener los clientes' });
    }
  });
module.exports = router;