var mongoose = require("mongoose")
var connection = mongoose.connect("mongodb://127.0.0.1:27017/examen")
mongoose.connection.on('open',(ref)=>{
    console.log("conectado a mongoDb");
});
module.exports=connection;