function Mostrar()
{
	var numero1;
	var numero2;
	var multiplicacion;
	var suma;
	var resta;
	var total;


	numero1=prompt("Ingrese el primer numero:");
	numero1=parseInt(numero1);

	numero2=prompt("Ingrese el segundo numero:");
	numero2=parseInt(numero2);

	if (numero1==numero2) 
	{
		multiplicacion=numero1*numero2;
		total="El resultado de esta multilplicacion es: "+multiplicacion;	
	}
	else
	{
		if (numero1>numero2) 
		{
			resta=numero1-numero2;
			total="El resultado de esta resta es: "+resta;
		}
		else
		{
			suma=numero1+numero2;
			total="El resultado de esta suma es: "+suma;
		}
	}

	document.write(total);
}
