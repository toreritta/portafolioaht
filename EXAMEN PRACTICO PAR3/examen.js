
function multiplicar() {
	// Variables locales
	var n1=document.getElementById('hrs').value;
	var n2=document.getElementsByTagName("select")[0].value;

	var res=parseFloat(n1)*parseFloat(n2);

	document.getElementById('titulo').innerHTML="SU TOTAL A PAGAR ES:";
	document.getElementById('resultado').innerHTML="$"+ res + ".00";
}