function calcularCuota() {
  let venta = document.getElementById("venta").value;
  let compra = document.getElementById("compra").value;
  let result = [(parseFloat(venta) + parseFloat(compra))/2]*85;
  document.getElementById("result").innerHTML = "La cuota es: " + result;
  document.getElementById("result").style.display = "block";
}

function refrescar() {
  document.getElementById("venta").value = "";
  document.getElementById("compra").value = "";
  document.getElementById("result").style.display = "none";
}