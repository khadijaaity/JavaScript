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

function AreaTriangulo(b,a){
	alert('El área de un triángulo es: ' + ((b*a)/2).toFixed(2));
}

function AreaReclangulo(b,a){
	alert('El área de un reclángulo es: ' +(b*a).toFixed(2));
}

function AreaCirculo(r){
	alert('El área de un círculo es: ' + (Math.PI*(Math.pow(r,2))).toFixed(2));
}

function descuento(p,d){
	if( p<=0 || d>100){
		alert(NaN);
	}else{
		alert('El precio Final es de : '+ (p-(((p*d)/100).toFixed(2))) +' €');
	}
}