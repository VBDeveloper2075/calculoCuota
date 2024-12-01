function calcularCuota() {
  let venta = document.getElementById("venta").value;
  let compra = document.getElementById("compra").value;
  let result = parseFloat(venta) - parseFloat(compra);
  document.getElementById("result").innerHTML = "La cuota es: " + result;
  
}
