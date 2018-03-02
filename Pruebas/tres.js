function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var perimetroportreshilos;

	largo=document.getElementById('largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);

	perimetro=ancho*largo;
	perimetroportreshilos=perimetro*3;

	alert("Se necesitan "+perimetroportreshilos+" metros de alambre.");



}
