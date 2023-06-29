var mongoose=require('mongoose');
Schema=mongoose.Schema;

var ventaSchema= new mongoose.Schema({
    nombreProducto:String,
    cantidad:Number,
    precio:Number,
    fecha:Date
});
var venta=mongoose.model('venta',ventaSchema);
module.exports=venta;