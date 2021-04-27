function colorea(elemento,color){
	elemento.style.backgroundColor=color;
}

function volumenEsfera(radio){
	return (4*Math.PI/3*Math.pow(radio,3));
}

function minimo(n1,n2){

	if(n1==n2){
		alert('Los dos valores són iguales');

	}else if(n1>n2){
		alert('Los valor más pequeño es: ' +n2);
	}else{
		alert('Los valor más pequeño es: ' +n1);
	}
}