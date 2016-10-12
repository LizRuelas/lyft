$(document).ready(function() {
	$("#numeroTlf").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57) || (ascii >= 37 && ascii <=40)) {
			return true;
		} else {
			return false;
		}
	});

	$("#numeroTlf").keyup(function(evento) {
		var longitud = $(this).val().length;
		if (longitud == 9) {
			$("#siguienteRegistrar").attr("href", "validarCodigo.html");
		} else {
			$("#siguienteRegistrar").removeAttr("href");
		}
	});
});

$("#siguienteRegistrar").click(generarCodigo);

function generarCodigo(){
	var longitud = $("#numeroTlf").val().length;
		if (longitud == 9) {
			var random = Math.round(Math.random()*900)+99;
			var codigo = "LAB" + random;
			alert(codigo);
		}
}
$("#siguienteValidarCodigo").click(registrar);

function registrar(){
	$("#siguienteValidarCodigo").attr("href" , "registrarDatos.html")
}
