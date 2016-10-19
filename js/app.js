$(document).ready(function() {
	$(".num").eq(0).focus();
	$("#numeroTlf").focus();

	$("#numeroTlf").keydown(keyNumeros); 
	$("#numeroTlf").keyup(validarTelefono);
	$("#siguienteRegistrar").click(generarCodigoValidar);
	$("#siguienteRegistrar").click(generarTelefono);
	$("#siguienteValidarCodigo").click(validarRandom);
	$("#btn-resend").click(generarCodigo);
	$(".num").keyup(siguienteFocus);

	function keyNumeros(evento){
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57) || (ascii >= 37 && ascii <=40)) {
			return true;
		} else {
			return false;
		}
	}

	function validarTelefono(){
		if ($(this).attr("maxlength","9") && $(this).val().length == 9 ) {
			$("#siguienteRegistrar").attr("href" , "validarCodigo.html");
		} else {
			$("#siguienteRegistrar").removeAttr("href");
		}
	}

	function generarCodigoValidar(){
		if($("#numeroTlf").val().length == 9){
			window.localStorage.setItem("codigo" , Math.round(Math.random()*900)+99);
			var codigoRandom = "LAB - " + window.localStorage.getItem("codigo");
			alert(codigoRandom);
		} else alert("colocar 9 digitos por favor");
	}

	function generarCodigo(){
		window.localStorage.setItem("codigo" , Math.round(Math.random()*900)+99);
		var codigoRandom = "LAB - " + window.localStorage.getItem("codigo");
		alert(codigoRandom);
		$(".num").val("");
		$(".num").eq(0).focus();	
	}

	function generarTelefono(){
		if($("#numeroTlf").val().length == 9){
		window.localStorage.setItem("telefono" , $("#numeroTlf").val())
		}
	}

	function validarRandom(){
	 var concatenarInput = $(".w-10").eq(0).val() + $(".w-10").eq(1).val() + $(".w-10").eq(2).val();
	 if (concatenarInput == window.localStorage.getItem("codigo")){
	 	$("#siguienteValidarCodigo").attr("href" , "registrarDatos.html")
	 } else if($(".w-10").eq(0).val() == "" || $(".w-10").eq(1).val()=="" || $(".w-10").eq(2).val()=="" ){
	 	alert("codigo incompleto");
	 }
	 else alert ("codigo invalido");
	}


	function siguienteFocus(e){
		if ($(this).val().length == 1 && $(this).attr("maxlength" , "1")) {
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
	
}


});

