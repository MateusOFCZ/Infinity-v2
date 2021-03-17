function Contact() {
	var Name = document.getElementById("name").value;
	var EMail = document.getElementById("email").value;
	var Message = document.getElementById("message").value;
	
	if(Name != "" && EMail != "" && Message != "") {
		$('#Toast_Sucess').toast('show');
	}else {
		$('#Toast_Error').toast('show');
	}
}

var Tema = 1;

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}

$(document).ready(function(){
	var CookieTema = getCookie("Tema");
	AlterarTemaCookie(CookieTema);
});

function AlterarTemaCookie(Tema) {
	if(Tema === "1"){
		document.getElementById("Body").className = "Tema_Original";
	}
	
	if(Tema === "2") {
		document.getElementById("Body").className = "Tema_Laranja";
	}

	if(Tema === "3") {
		document.getElementById("Body").className = "Tema_Amarelo";
	}

	if(Tema === "4") {
		document.getElementById("Body").className = "Tema_Escuro";
	}

	if(Tema === "5") {
		document.getElementById("Body").className = "Tema_Claro";
	}
}

function AlterarTema(Tema) {
	setCookie("Tema", Tema, 1);

	if(Tema === "1"){
		document.getElementById("Body").className = "Tema_Original";
	}
	
	if(Tema === "2") {
		document.getElementById("Body").className = "Tema_Laranja";
	}

	if(Tema === "3") {
		document.getElementById("Body").className = "Tema_Amarelo";
	}

	if(Tema === "4") {
		document.getElementById("Body").className = "Tema_Escuro";
	}

	if(Tema === "5") {
		document.getElementById("Body").className = "Tema_Claro";
	}
}