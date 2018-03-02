function Mostrar()
{
	var importe;
	var iteracciones=24;
	var mayorimporte;
	var menorimporte;
	var contador=0;
	var respuesta ""


	while(contador<iteracciones)
	{
		contador++;
		importe=prompt("Ingrese el importe de las ventas:");
		importe=parseInt(importe);

		while(importe<0||isNaN(importe))
		{
			importe=prompt("ERROR Ingrese el importe de las ventas:");
			importe=parseInt(importe);
		}

	}
}
