function sumar() {
  let n1 = parseFloat(document.getElementById("suma1").value);
  let n2 = parseFloat(document.getElementById("suma2").value);
  let resultado = n1 + n2;
  document.getElementById("resultadoSuma").innerText = "Resultado: " + resultado;
}

function restar() {
  let n1 = parseFloat(document.getElementById("resta1").value);
  let n2 = parseFloat(document.getElementById("resta2").value);
  let resultado = n1 - n2;
  document.getElementById("resultadoResta").innerText = "Resultado: " + resultado;
}

function multiplicar() {
  let n1 = parseFloat(document.getElementById("multi1").value);
  let n2 = parseFloat(document.getElementById("multi2").value);
  let resultado = n1 * n2;
  document.getElementById("resultadoMulti").innerText = "Resultado: " + resultado;
}

function dividir() {
  let n1 = parseFloat(document.getElementById("divi1").value);
  let n2 = parseFloat(document.getElementById("divi2").value);
  let resultado = n1 / n2;
  document.getElementById("resultadoDivi").innerText = "Resultado: " + resultado;
}

