const botonEncriptar = document.querySelector("#btn-encriptar");
const botonDesencriptar = document.querySelector("#btn-desencriptar");
const botonCopiar = document.querySelector("#btn-copiar");
const inputEntrada = document.getElementById("inputtexto");
const inputSalida = document.getElementById("texto2");
const munheco = document.getElementById("imgDer");
const textMunheco = document.getElementById("texto");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);
inputEntrada.focus();

function encriptar() {
  let texto = inputEntrada.value.toLowerCase();
  let txtcifrado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  munheco.style.display = "none";
  textMunheco.style.display = "none";
  botonCopiar.style.display = "show";
  inputSalida.innerHTML = txtcifrado;
  // inputEntrada.innerHTML = " ";
  botonCopiar.style.display = "inherit";
}

function desencriptar() {
  let texto = inputSalida.value.toLowerCase();
  let txtcifrado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  munheco.style.display = "none";
  textMunheco.style.display = "none";
  botonCopiar.style.display = "show";
  inputSalida.innerHTML = txtcifrado;
  // inputEntrada.innerHTML = " ";
  botonCopiar.style.display = "inherit";
}

function copiar() {
  let contenido = inputSalida.value;
  navigator.clipboard.writeText(contenido);
  inputEntrada.value = "";
  inputEntrada.focus();
}
