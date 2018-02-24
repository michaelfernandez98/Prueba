function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var sumadenegativos=0;
	var sumadepositivos=0;
	var cantidaddepositivos=0;
	var cantidaddenegativos=0;
	var cantidaddeceros=0;
	var cantidaddenumerospares=0;
	var promediodepositivos=0;
	var promediodenegativos=0;
	var diferencia=0;


	while(respuesta!="no")
	{
		respuesta=prompt("Ingrese los numeros");

		if (respuesta=="no") 
		{
			break;
		}	
		else
		{
			contador++;
			respuesta=parseInt(respuesta);

			if ((respuesta%2)==0) 
			{
				cantidaddenumerospares++;
			}
			if (respuesta<0) 
			{
				cantidaddeceros++
			}
			else if (respuesta==0) 
			{
				cantidaddeceros++;
			}
			else
			{
				cantidaddepositivos++;
				sumadepositivos=sumadepositivos+respuesta;
				promediodepositivos=sumadepositivos/cantidaddepositivos;
			}
		}
	
	}
	diferencia=sumadepositivos+sumadenegativos;
	document.write("<br><br>Cantidad de positivos: "+cantidaddepositivos);
	document.write("<br><br>Suma de positivos: "+sumadepositivos);
	document.write("<br><br>Promedio de positivos: "+promediodepositivos);
	document.write("<br><br>Cantidad de negativos: "+cantidaddenegativos);
	document.write("<br><br>Suma de negativos: "+sumadenegativos);
	document.write("<br><br>Promedio de negativos: "+promediodenegativos);
	document.write("<br><br>Cantidad de ceros: "+cantidaddeceros);
	document.write("<br><br>Cantidad de pares: "+cantidaddenumerospares);
	document.write("<br><br>Diferencia entre pos y neg: "+diferencia);



}//FIN DE LA FUNCIÓN