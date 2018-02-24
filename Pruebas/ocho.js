function Mostrar()
{
	var nombre;
	var cantidad;
	var seguir="";
	var promedio;
	var nota;
	var sumadenotas=0;
	var sexo;
	var sexof=0;
	var sexom=0;
	var varonesdesaprobados=0;
	var notaminima;
	var edad;


	while(seguir!='no')
	{
		nombre=prompt("Ingrese el nombre: ");
		cantidad++;
		edad=prompt("ingrese su edad");
		edad=parseInt(edad);
		if(edad<0&&edad>100)
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
		}
		sexo=prompt("Ingrese su sexo");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Ingrese su sexo");
		}
		if (sexo=="f") 
		{
			sexof++;
		}
		if (sexo=="m") 
		{
			sexom++;
		}

		nota=prompt("Ingrese nota");
		nota=parseInt(nota);
		sumadenotas=sumadenotas+nota;

		while(nota<0||nota>10)
		{
			nota=prompt("Ingrese nota");
			nota=parseInt(nota);
		}
		/*if (nota<4&&sexo="m") 
		{
			varonesdesaprobados++;
		}*/
		seguir=prompt("Ingrese 'NO' para salir");
	}
	promedio=sumadenota/cantidad;
	document.write("<br>son "+cantidad+" de alumnos");
	document.write("<br>El promedio es: "+promedio+" de notas");
	document.write("sexom: "+sexom+"<br> sexof: "+sexof);
}
