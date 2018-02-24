function Mostrar()
{

	var numero 
	numero= parseInt(prompt("ingrese un número entre 0 y 10."));

	while(isNaN(numero)||(!(numero>0&&numero<11)))
	{	
		numero=prompt("'ERROR' Ingrese un numero entre 0 y 10.");

	}	
	alert("Ingresaste bien el numero.");

	document.getElementById('Numero').value=numero
		

}//FIN DE LA FUNCIÓN