$(document).ready(function() {
	$(".num").eq(0).focus();
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
$("#siguienteRegistrar").click(generarTelefono);
$("#btn-resend").click(generarCodigo);
function generarCodigo(){
			window.localStorage.setItem("codigo" , Math.round(Math.random()*900)+99);
			var codigoRandom = "LAB - " + window.localStorage.getItem("codigo");
			alert(codigoRandom);			
}
function generarTelefono(){
	window.localStorage.setItem("telefono" , $("#numeroTlf").val() )
}

$("#siguienteValidarCodigo").click(validarRandom);

function validarRandom(){
 var concatenarInput = $(".w-10").eq(0).val() + $(".w-10").eq(1).val() + $(".w-10").eq(2).val();
 if (concatenarInput == window.localStorage.getItem("codigo")){
 	$("#siguienteValidarCodigo").attr("href" , "registrarDatos.html")
 } else if($(".w-10").eq(0).val() == "" || $(".w-10").eq(1).val()=="" || $(".w-10").eq(2).val()=="" ){
 	alert("codigo incompleto");
 }
 else alert ("codigo invalido");
}


$(".num").keyup(siguienteFocus);

function siguienteFocus(e){
	var longitud = $(this).val().length;
	if (longitud == 1 ){
		$(this).next().focus();
	}

	var borrar = e.keyCode;
	if(borrar == 8 ){
		$(this).prev().focus();
	}
}

$(".num").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57) || (ascii >= 37 && ascii <=40)) {
			return true;
		} else {
			return false;
		}
	});


$("validarCodigo.html").ready(mostrarNumeroTlf);

function mostrarNumeroTlf(){
	$("#numTlf").text(window.localStorage.getItem("telefono"))
}

$("#nextRegistrarDatos").click(validarNamesEmail);

function validarNamesEmail(){
	// A-Z para nombres y apellidos
	var regexNombre = /^[a-zñáéíóú]+$/gi;
	var regexApellido = /^[a-zñáéíóú]+$/gi;
	var regexCorreo = /^[a-z0-9@a-z0-9.a-z]+$/gi;
	if(!regexNombre.test($("#nombre").val()) || !regexApellido.test($("#apellido").val()) ){
		alert("no ingrese numeros ni otro caracter en los nombres y/o apellidos")
	}
	if (!regexCorreo.test($("#correo").val())){
		alert("ingrese un correo valido")
	} else ($("#nextRegistrarDatos")).attr("href" , "geolocation.html");
	
}


});

