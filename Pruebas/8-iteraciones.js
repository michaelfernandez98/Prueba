//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 8-iteraciones");
/*se ingresa hasta que el usuario quiera el nombre de un animal, 
el peso del mismo(validar que sea mayor a 0), 
la temperatura del habitat de este animal(validar entre -40 y 40). 
Informar la cantidad de temperaturas pares
la cantidad de temperaturas impares
el nombre del animal más pesado
el nombre del animal menos pesado
la cantidad de animales que viven en habitat menores a 0 inclusive
el promedio del peso de todos los animales
la temperatura máxima y la mínima*/
	var nombre;
	var peso;
	var temperatura;
	var cantidaddetemperaturaspares=0;
	var cantidaddetemperaturasimpares=0;
	var animalmaspesado;
	var animalmenospesado;
	var cantidadeanimalesmenoresacero=0;
	var promediodelpeso;
	var temperaturamaxima;
	var temperaturaminima;
	var contador=0;
	var respuesta="";
	var acumuladordepeso=0;
	var maximo;
	var minimo;


	while(respuesta!="no")
	{
		contador++;
		nombre=prompt("Ingrese el nombre del animal:");

		//peso y su validacion
		peso=prompt("Ingrese el peso del animal:");
		peso=parseInt(peso);

		while(peso<0||isNaN(peso))
		{
			peso=prompt("ERROR Ingrese el peso correctamente:");
			peso=parseInt(peso);
		}
		acumuladordepeso=acumuladordepeso+peso;
		
		//temperatura y validacion
		temperatura=prompt("Ingrese la temperatura del habitat");
		temperatura=parseInt(temperatura);

		while(temperatura<-40||temperatura>40||isNaN(temperatura))
		{
			temperatura=prompt("ERROR Ingrese la temperatura correcta");
			temperatura=parseInt(temperatura);
		}

		//cantidad de temperaturas pares e impares
		if (temperatura%2==0&&temperatura!=0) 
		{
			cantidaddetemperaturaspares++;
		}
		else
		{
			if (!(temperatura%2==0)&&temperatura!=0) 
			{
				cantidaddetemperaturasimpares++;
			}
		}

		//animal mas pesado, menos pesado, peso maximo, peso minimo, temperatura minima, temperatura maxima.
		if (contador==1) 
		{
			minimo=peso;
			animalmenospesado=nombre;
			maximo=peso;
			animalmaspesado=nombre;
			temperaturamaxima=temperatura;
			temperaturaminima=temperatura;
		}
		else
		{
			if (peso<minimo) 
			{
				minimo=peso;
				animalmenospesado=nombre;
			}
			if (peso>maximo) 
			{
				maximo=peso;
				animalmaspesado=nombre;
			}
			if (temperatura<temperaturaminima) 
			{
				temperaturaminima=temperatura;
			}
			if (temperatura>temperaturamaxima) 
			{
				temperaturamaxima=temperatura;
			}
			
			//animales que viven en habitats con temperaturas menores a cero
			if (temperatura<0) 
			{
				cantidadeanimalesmenoresacero++;
			}

			
		}
				
		respuesta=prompt("Pulse 'Enter' para continuar, de lo contrario ingrese 'no':");

	}
	promedio=acumuladordepeso/contador;

document.write("<br>La cantidad de temperaturas pares es: "+cantidaddetemperaturaspares);
document.write("<br>La cantidad de temper impares es: "+cantidaddetemperaturasimpares);
document.write("<br>El nombre del animal mas pesado es: "+animalmaspesado);
document.write("<br>El nombre del animal menos pesado es: "+animalmenospesado);
document.write("<br>La cantidad de animales que viven en un habitat con temperaturas menores a cero es: "+cantidadeanimalesmenoresacero);
document.write("<br>El promedio del peso de todos los animales es: "+promedio);
document.write("<br>la temperatura macima registrada de un animal es de: "+temperaturamaxima+"ºC");
document.write("<br>la temperatura minima registrada de un animal es de: "+temperaturaminima+"ºC")


	
}

