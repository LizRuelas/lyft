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
	$("#siguienteRegistrar").click(generarCodigo);

function generarCodigo(){
	var longitud = $("#numeroTlf").val().length;
		if (longitud == 9) {
			window.localStorage.setItem("codigo" , Math.round(Math.random()*900)+99);
			var codigoRandom = "LAB" + window.localStorage.getItem("codigo");
			alert(codigoRandom);
		}
}

$("#siguienteValidarCodigo").click(validarRandom);

function validarRandom(){
 var concatenarInput = $(".w-10").eq(0).val() + $(".w-10").eq(1).val() + $(".w-10").eq(2).val();
 if (concatenarInput == window.localStorage.getItem("codigo")){
 	$("#siguienteValidarCodigo").attr("href" , "registrarDatos.html")
 } else alert ("stef no jodas ");
}



});

