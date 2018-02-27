function Mostrar()
{
	var numero1;
	var numero2;
	var numero3;
	var maximo;
	var minimo;

	numero1=prompt("Ingrese numero:");
	numero1=parseInt(numero1);

	numero2=prompt("Ingrese numero:");
	numero2=parseInt(numero2);

	numero3=prompt("Ingrese numero:");
	numero2=parseInt(numero3);

	if (numero1>numero3&&numero2<numero1) 
	{
		alert(numero1);
	}
	else
	{
		if (numero2>numero1&&numero3<numero2) 
		{
			alert(numero2);
		}
		else
			{ 
				alert(numero3);
			}
	}
	if (numero1<numero3&&numero2>numero1)
	{
		alert(numer
	}
}






























/*	var max;
	var min;
	var respuesta='si';
	var contador=0;

	while(true)
	{
		
		respuesta= prompt("Ingrese los números");

		if (respuesta== "no") {
			break;
		}

		else{
			contador ++;
			respuesta=parseInt(respuesta);

			if (contador==1) {
				max=respuesta;
				min=respuesta;

			}
			else{
				if(respuesta>max){
					max=respuesta;
				}
				if (respuesta<min) {
					min=respuesta;
				}
			}
		}
		
	confirm(true);
	}

	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;
*/