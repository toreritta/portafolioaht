function leer() {
	// referencia por pseudoclase
	var nombre=document.forms["formulario"].elements[0].value;

	// referencia por Id
	var clave=document.getElementById("pass").value;

	// referencia por TagName
	var car=document.getElementsByTagName("select")[0].value;

	// referencia por Name
	var gen=document.getElementsByName("genero");

	for (i=0; i<gen.length; i++) {
		if (gen[i].checked){
			g=gen[i].value;
		}
	}

	// referencia por Id
	var p=document.getElementById("privacidad").checked;

	document.getElementById('datos').innerHTML="\<br>Nombre: "+nombre+
	"\<br>Password: "+clave+"\<br>Carrera: "+car+"\<br>Tu género es:"+g+
	"\<br>Acepto el acuerdo: "+p;
}