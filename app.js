const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

/* Actuliza el texto de los parrafos*/

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

/* creamos la funcion para actulizar el color */
 function actulizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
 }

// para actulizar red (rojo) este toma la informacion de inputRojo.value; mientras que el verde y azul se llama el obgeto (e)

inputRojo.addEventListener('change', () => {
    rojo = inputRojo.value;
    textoRojo.innerText = rojo;
    actulizarColor(rojo, verde, azul);
});

// para actulizar green (verde)

inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actulizarColor(rojo, verde, azul);
});

// para actulizar blue (azul)

inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actulizarColor(rojo, verde, azul);
});