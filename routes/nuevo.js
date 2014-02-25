var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/pathosG');
var url = require('url') ;

var datos = function(req){

    var datos 

    datos = {
        title   : 'PathosG - Nueva Sesión',
        id      : req.params.idSesion
    };
    console.log(req.params.idSesion);
    return datos;
};

var obtieneDatosPost=function(req){
     var hostname = req.headers.host; 
     var pathname = url.parse(req.url).pathname;
    var datos={
        idSesion    :   req.params.sesionId,
        nombre      :   req.body.nombre,
        empresa     :   req.body.empresa,
        participantes:  req.body.noParticipantes,
        password    :   req.body.passwordSesion
               
    };
    var collection = db.get('infoSesion');
    collection.insert(datos);
    console.log('Datos guardados');
    datos.title = 'pathosG';
    datos.direccion = hostname; 
    return datos;
}


exports.nuevaSesion = function(req,res){
    console.log(req.headers['referer']);
    res.render('nuevaSesion',datos(req));
    

};

exports.sesionCreada = function(req,res){
    console.log(req.body);
    res.render('sesionCreada',obtieneDatosPost(req));
    
}
