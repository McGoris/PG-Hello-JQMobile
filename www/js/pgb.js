function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	McGorisInfo();
}

	


function McGorisInfo() {

	info =  'Imie   : '    + 'McGoris' + '<br>' + 
			'Nazwisko    : '     + 'Goryl' + '<br>' + 
			'E-mail : '  + 'mcgoris@o2.pl' + '<br>' + 
			'Strona internetowa: ' + 'mcastronomia.blogspot.com' + '<br>' + 
			'Kierunek:    : '     + 'informatyka' + '<br>' + 
			'Semestr : '  + '5' + '<br>';

	document.getElementById("deviceDetails").innerHTML = info;	
}

function McGorisHobby() {

	info =  'Zainteresowania :   '    + 'Astronomia';
			

	document.getElementById("deviceDetails").innerHTML = info;	
}