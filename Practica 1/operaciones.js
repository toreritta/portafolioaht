/* Refereciamos a los elementos por ID, name o selector
En este ejercicio lo haremos por ID */

function sumar() {
	// Variables locales
	var n1=document.getElementById('num1').value;
	var n2=document.getElementById('num2').value;
	var res=parseFloat(n1)+parseFloat(n2);
	document.getElementById('resultado').innerHTML=res;
}

function restar() {
	// Variables locales
	var n1=document.getElementById('num1').value;
	var n2=document.getElementById('num2').value;
	var res=parseFloat(n1)-parseFloat(n2);
	document.getElementById('resultado').innerHTML=res;
}

function multiplicar() {
	// Variables locales
	var n1=document.getElementById('num1').value;
	var n2=document.getElementById('num2').value;
	var res=parseFloat(n1)*parseFloat(n2);
	document.getElementById('resultado').innerHTML=res;
}

function dividir() {
	// Variables locales
	var n1=document.getElementById('num1').value;
	var n2=document.getElementById('num2').value;
	var res=parseFloat(n1)/parseFloat(n2);
	document.getElementById('resultado').innerHTML=res;
}