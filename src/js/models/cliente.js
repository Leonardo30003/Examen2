var mongoose=require('mongoose');
Schema=mongoose.Schema;

var clienteSchema= new mongoose.Schema({
    nombres:String,
    apellidos:String,
    edad:Number,
    genero:String,
    cedula:Number,
    descripcion:String,
    telefono:String
});
var cliente=mongoose.model('cliente',clienteSchema);
module.exports=cliente;