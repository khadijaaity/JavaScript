//variable globales
var partidas = 0;
var ganadas = 0;
var empatadas = 0;
var perdidas = 0;

	
// function tirada jugador

function tirada(tiradaJugador){

	var	tiradaMaquina = Math.floor((Math.random() *3));

	switch(tiradaMaquina){
		case 0: tiradaMaquina = 'piedra'; 
				imgCRU.src = 'img/piedra.jpg';
				imgCRU.alt = 'piedra';
				imgCRU.title ='piedra';
				break;

		case 1: tiradaMaquina = 'papel';
				imgCRU.src = 'img/papel.jpg';
				imgCRU.alt = 'papel';
				imgCRU.title ='papel';
				break;
		case 2: tiradaMaquina = 'tijera';
				imgCRU.src = 'img/tijera.jpg';
				imgCRU.alt = 'tijera';
				imgCRU.title ='tijera';
				break;

		case 2: tiradaMaquina = 'lagarto';
				imgCRU.src = 'img/lagarto.jpg';
				imgCRU.alt = 'lagarto';
				imgCRU.title ='lagarto';
				break;

		case 2: tiradaMaquina = 'spock';
				imgCRU.src = 'img/spock.jpg';
				imgCRU.alt = 'spock';
				imgCRU.title ='spock';
				break;	
	}

	var imgJugador = document.getElementById('imgJugador');

		switch(tiradaJugador){

		case 'piedra': 	imgJugador.src = 'img/piedra.jpg';
						imgJugador.alt = 'piedra';
						imgJugador.title ='piedra';
						break;

		case 'papel': 	imgJugador.src = 'img/papel.jpg';
						imgJugador.alt = 'papel';
						imgJugador.title ='papel';
						break;

		case 'tijera': 	imgJugador.src = 'img/tijera.jpg';
						imgJugador.alt = 'tijera';
						imgJugador.title ='tijera';
						break;

		case 'lagarto': imgJugador.src = 'img/lagarto.jpg';
						imgJugador.alt = 'lagarto';
						imgJugador.title ='lagarto';
						break;

		case 'spock': 	imgJugador.src = 'img/spock.jpg';
						imgJugador.alt = 'spock';
						imgJugador.title ='spock';
						break;
	}

		var result;

		if(tiradaJugador==tiradaMaquina){
			result = 'Has Empatado';
			empatadas++;

		}else if((tiradaJugador== 'piedra' && tiradaMaquina=='tijera') ||
		 		(tiradaJugador=='piedra' && tiradaMaquina=='lagarto') ||
				(tiradaJugador=='tijera' && tiradaMaquina=='papel') || 
				(tiradaJugador=='tijera' && tiradaMaquina=='lagarto') ||
				(tiradaJugador=='papel' && tiradaMaquina=='piedra') ||
				(tiradaJugador=='papel' && tiradaMaquina=='spock') ||
				(tiradaJugador=='lagarto' && tiradaMaquina=='papel') ||
				(tiradaJugador=='lagarto' && tiradaMaquina=='spock') ||
				(tiradaJugador=='spock' && tiradaMaquina=='piedra') ||
				(tiradaJugador=='spock' && tiradaMaquina=='tijera')
				){
				result = 'Has Ganado';
				ganadas++;
		}else{
			result = 'Has Perdido';
			perdidas++;
		}

		partidas++;
		
		resultado.innerHTML = result;
		out_partidas.innerHTML = partidas;
		out_ganadas.innerHTML = ganadas;
		out_pertidas.innerHTML = perdidas;
		out_empatadas.innerHTML = empatadas;
		porcentaje.innerHTML = ((ganadas/partidas)*100).toFixed(2)+'%';
}

function reiniciar(){
	var	tiradaMaquina = Math.floor((Math.random() *3));
	out_partidas.innerHTML = 0;
	out_ganadas.innerHTML = 0;
	out_pertidas.innerHTML = 0;
	out_empatadas.innerHTML = 0;
	porcentaje.innerHTML = 0 +'%';
	partidas = 0;
	ganadas = 0;
	empatadas = 0;
	perdidas = 0;
	resultado.innerHTML= '';
	document.getElementById('imgJugador').src = 'img/nada.png';
	document.getElementById('imgCRU').src = 'img/nada.png';
}