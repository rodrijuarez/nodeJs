var external = require('./external.js');
mostrarMensaje = function(){
	external.message();
	alert("Este es un mensaje desde el home.js");
};
$("#boton").click(function(){
	mostrarMensaje();
});