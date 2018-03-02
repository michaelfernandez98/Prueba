function Mostrar()
{
	var diadelasemana;

	diadelasemana=prompt("Ingrese un dia de la semana:");

	switch(diadelasemana)
	{
		case "sabado":
		case "domingo":
			 	alert("Es fin de semana!!!");
			 		break;

		default:
			alert("A trabajar!!!");

	}

}
