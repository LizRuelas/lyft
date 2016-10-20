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
	$(".num").keydown(soloNumerosCodigo)
	$("validarCodigo.html").ready(mostrarNumeroTlf);
	$("#nextRegistrarDatos").click(validarNamesEmail);
	$("view-profile.html").ready(mostrarNombre);

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
		} else if($(".w-10").eq(0).val() == "" && $(".w-10").eq(1).val()=="" && $(".w-10").eq(2).val()==""){
		 	alert ("Ingresar su codigo por favor");
		} else alert ("codigo incompleto")
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

	function soloNumerosCodigo(){
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57) || (ascii >= 37 && ascii <=40)) {
			return true;
		} else {
			return false;
		}
	}

	function mostrarNumeroTlf(){
		$("#numTlf").text(window.localStorage.getItem("telefono"))
	}

	function validarNamesEmail(){
		// A-Z para nombres y apellidos
		var regexNombre = /^[a-zñáéíóú]+$/gi;
		var regexApellido = /^[a-zñáéíóú]+$/gi;
		var regexCorreo = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();
		var correo = $("#correo").val();

		var nombreValido = false;
		var apellidoValido = false;
		var correoValido = false;

		if (!regexNombre.test(nombre)) {
			alert("Ingresa un nombre válido");
		} else if(nombre.length <2 || nombre.length >20) {
			alert("ingrese min 2 y max 20 caracteres en el nombre")
		} else nombreValido = true;


		if (!regexApellido.test(apellido)) {
			alert("Ingresa un apellido válido");
		} else if(apellido.length <2 || apellido.length >20) {
			alert("ingrese min 2 y max 20 caracteres en el apellido")
		} else apellidoValido = true;
		
		if (!regexCorreo.test(correo)) {
			alert("Ingresa un correo válido");
		} else if(apellido.length <5 || apellido.length >50) {
			alert("ingrese min 5 y max 50 caracteres en el correo")
		} else correoValido = true ; 

		if(nombreValido == true && apellidoValido == true && correoValido==true ){
			$("#nextRegistrarDatos").attr("href" , "geolocation.html")
		}

		window.localStorage.setItem("nombreGuardado" , nombre);
		 
	}

	function mostrarNombre(){
		$("#nameMostrar").text(window.localStorage.getItem("nombreGuardado"));
	}


});

