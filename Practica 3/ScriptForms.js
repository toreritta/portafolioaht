function leer() {
	let total = 0;

	for (let x = 1; x <= 10; x++) {
		const seleccionado = document.querySelector(`input[name="q${x}"]:checked`);
		if (seleccionado) {
			total += parseInt(seleccionado.value);
		}
	}

	document.getElementById('titulo').innerHTML = "Sus resultados fueron... <br>";
	document.getElementById('resultado').innerHTML = `${total} / 30 pts`;

	google.charts.load("current", { packages: ['corechart'] });
	google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
	let res = [];

	for (let x = 1; x <= 10; x++) {
		const seleccionado = document.querySelector(`input[name="q${x}"]:checked`);
		if (seleccionado) {
			res.push(parseInt(seleccionado.value));
		} else {
			res.push(0); // Asegura que hay 10 valores
		}
	}

	const data = google.visualization.arrayToDataTable([
		["Pregunta", "Puntaje", { role: "style" }],
		...res.map((valor, i) => [`Pregunta ${i + 1}`, valor, "#963f3e"])
	]);

	const view = new google.visualization.DataView(data);
	view.setColumns([
		0, 1,
		{ calc: "stringify", sourceColumn: 1, type: "string", role: "annotation" },
		2
	]);

	const options = {
		title: "TUS RESULTADOS",
		width: 600,
		height: 400,
		bar: { groupWidth: "95%" },
		legend: { position: "none" },
	};

	const chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
	chart.draw(view, options);
}

function generar() {
			var doc = new jsPDF();

			doc.setFontSize(30);
			doc.setTextColor(56,89,68);
			doc.text(10, 20, "RESULTADOS DEL CUESTIONARIO");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 40, "1.¿Quién escribió la Odisea? = Homero");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 50, "2.¿Quiés es Odiseo? = El Rey de Ítaca o Nadie");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 60, "3.Odiseo era alumno y protegido de algún dios.");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 70, "¿De qué Dios estamos hablando? = Atena");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 80, "4.¿Qué ser míticos se encontro Odiseo a lo largo de su");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 90, "viaje?= Eolo");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 100, "5.Odiseo era padre de una niña, ¿Cierto o falso? = Falso");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 110, "6.¿Cuánto tiempo estuvo Odiseo alejado de su hogar?");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 120, "= 20 años");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 130, "7.Tiresias le da una profecia a Odiseo. ¿Qué decia dicha");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 140, "profecia? = Mientras Odiseo no toque al ganado de Helios");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 150, "podrá volver a casa.");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 160, "8.¿Quién o quiénes esperaban a que Odiseo regresará");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 170, "a casa? = Su perro");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 180, "9.¿Cuál fue la prueba que les puso Penélope a sus");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 190, "pretendientes para decir al nuevo rey? = Tensar el arco de");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 200, "Odiseo y disparar una flecha a través de doce agujeros de");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 210, "unas hachas.");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 220, "10.- ¿Comó Penélope logro reconocer a Ulises?");
			doc.setFontSize(20);
			doc.setTextColor(146,24,24);
			doc.text(10, 230, "Por la cama de olivo");

			var string = doc.output('datauristring');
			$('iframe').attr('src', string);
} 