/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
	var aumento;

	sueldo=document.getElementById('sueldo').value;

	sueldo=parseInt(sueldo);

	aumento=sueldo*1.1;

	document.getElementById("resultado").value=aumento.toFixed(0);


}
/*el .toFixed(0) en este caso hace que el resultado no me muestre los 
  numeros decimales del resultado
	"y variaria segun la cantidad que halla puesto dentro de la parentesis"*/