function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	var interacciones=5;

	while(contador<interacciones)
	{
		contador++;
		numero=prompt("Ingrese el numero:");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	}
		promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/interacciones;

}//FIN DE LA FUNCIÓN