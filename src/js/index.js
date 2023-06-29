const express= require("express");
const app=express();
const bodyParser=require("body-parser");
const connection=require('./config/conexion');
const ruta=require('./routers/router');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',ruta);
app.listen(3002,()=>{
    console.log("Servidor iniciado");
});