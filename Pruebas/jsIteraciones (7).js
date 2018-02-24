function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

while(respuesta!="no")
	{
		respuesta=prompt("Ingrese los números, cuando finalice ingrese la palabra 'no'");

		if(respuesta!="no"){
			respuesta= parseInt(respuesta);
			contador= contador+1;
			acumulador= acumulador+respuesta;
		}
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN