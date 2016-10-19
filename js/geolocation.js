var cargarPagina = function() {
	if (navigator.geolocation) { 
		// también se puede usar if ("geolocation" in navigator) {}
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
    var mapa = document.getElementById('mapa')
    
    var myOptions = {
	    center:latlon,zoom:14,
	    mapTypeId:google.maps.MapTypeId.ROADMAP,
	    mapTypeControl:false,
	    navigationControlOptions:{
	    	style: google.maps.NavigationControlStyle.SMALL
	   	}
    };
    var map = new google.maps.Map(document.getElementById('mapa'), myOptions);

    var marker = new google.maps.Marker({
    	position:latlon,
    	map:map,
    	title:"You are here!"
    });

    var dir = "";
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({"latLng": latlon}, function(results, status)
    {
        if (status == google.maps.GeocoderStatus.OK)
        {
            if (results[0])
            {
                dir =  results[0].formatted_address ;
            }
            else
            {
                dir = "No se ha podido obtener ninguna dirección en esas coordenadas";
            }
        }
    $("#ubicacion").val(dir);
    });
};



var funcionError = function (error) {
	console.log(error);
};

$(document).ready(cargarPagina);
$(".button-collapse").sideNav({
      menuWidth: 220, // Default is 240
      edge: "left", // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
