
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function agregar(id, texto) {
  document.getElementById(id).innerHTML += texto + "<br>";
}

// Ejercicio 1
async function runEjercicio1() {
  document.getElementById("out1").innerHTML = "";
  agregar("out1", "console.log: Inicio del programa");
  agregar("out1", "await esperar(2000) ... pausando 2 segundos");
  await esperar(2000);
  agregar("out1", "console.log: Este es el callback ejecutandose 2 segundos despues");
  agregar("out1", "console.log: Fin del programa (ahora si en orden)");
}

// Ejercicio 2
async function runEjercicio2() {
  document.getElementById("resultado").innerHTML = "Consultando API...";
  try {
    const res  = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    console.log(data);
    const razas = Object.keys(data.message);
    document.getElementById("resultado").innerHTML =
      "<strong>Total de razas: " + razas.length + "</strong><br><br>" +
      razas.map(r => "-" + r).join("<br>");
  } catch (err) {
    document.getElementById("resultado").innerHTML = "Error: " + err.message;
  }
}

// Ejercicio 3
async function runEjercicio3() {
  document.getElementById("out3-cb").innerHTML = "";
  document.getElementById("out3-async").innerHTML = "";

  // Lado callback
  agregar("out3-cb", "Inicio");
  setTimeout(() => {
    agregar("out3-cb", "Callback: 2s despues");
    agregar("out3-cb", "Fin (llego tarde)");
  }, 2000);
  agregar("out3-cb", "Fin del programa (salio antes del callback!)");

  // Lado async/await
  agregar("out3-async", "Inicio");
  agregar("out3-async", "await esperar(2000)...");
  await esperar(2000);
  agregar("out3-async", "2 segundos despues - await cumplido");
  agregar("out3-async", "Fin del programa (en orden)");
}