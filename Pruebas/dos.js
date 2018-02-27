function Mostrar()
{
  //Mostrar le importe final, pedir precio y porcentaje de descuento.
  	var precio;
  	var descuento;
  	var importefinal;

  	precio=prompt("Ingrese el precio");
  	precio=parseInt(precio);

  	descuento=prompt("Ingrese el descuento ");
  	descuento=parseInt(descuento);

  	importefinal =precio%descuento;
  	importefinal=parseInt(importefinal);

  	document.getElementById('importeFinal').value=importefinal;

}
