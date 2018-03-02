function Mostrar()
{
  var importe;
  var importefinal;
  var aumento;

  importe=prompt("Ingrese el importe del producto:");
  importe=parseInt(importe);

  aumento=1.21;

  importefinal=importe*aumento;

  document.getElementById('importeFinal').value=importefinal;
  
}
