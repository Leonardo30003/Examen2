var mongoose=require('mongoose');
Schema=mongoose.Schema;

var productoSchema=new mongoose.Schema({
    nombre:String,
    descripcion:String,
    precio:Number,
    cantidadDisponible:Number
});
var producto=mongoose.model('producto',productoSchema);
module.exports=producto;