
/*
 * GET users listing.
 */
var obtenerUsuarios = function(datos){
    var users={
        title : 'PathosG',
        name1 : datos
    }

    return users;
};

exports.usuario = function(req, res){
    console.log(req.param('sesionId'));
    res.render('usuario',obtenerUsuarios(req.param('sesionId')));
}

exports.host = function(req,res){
    res.render('host',{title : 'pathosG'});
    
}
