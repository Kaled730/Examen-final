const imagenesMundial = [
    "img/M1.jpg",
    "img/M2.jpg",
    "img/M3.jpg",
    "img/M4.jpg",
    "img/M5.jpg"
];

let indiceActual = 0;

function cambiarImagen(direccion) {
    indiceActual = indiceActual + direccion;
    
    if (indiceActual >= imagenesMundial.length) {
        indiceActual = 0;
    }
    if (indiceActual < 0) {
        indiceActual = imagenesMundial.length - 1;
    }
    
    document.getElementById('img-carrusel').src = imagenesMundial[indiceActual];
    document.getElementById('texto-carrusel').innerText = `Imagen ${indiceActual + 1} de ${imagenesMundial.length}`;
}

function mostrarSeccion(seccion) {
    document.getElementById('seccion-bienvenida').classList.add('oculto');
    document.getElementById('seccion-perfil').classList.add('oculto');
    document.getElementById('btn-bienvenida').classList.remove('active');
    document.getElementById('btn-perfil').classList.remove('active');
    
    if (seccion === 'bienvenida') {
        document.getElementById('seccion-bienvenida').classList.remove('oculto');
        document.getElementById('btn-bienvenida').classList.add('active');
    } else if (seccion === 'perfil') {
        document.getElementById('seccion-perfil').classList.remove('oculto');
        document.getElementById('btn-perfil').classList.add('active');
    }
}
const matrizLetraJ = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0]
];

function construirGrilla() {
    const contenedor = document.getElementById('contenedor-grilla');
    contenedor.innerHTML = '';
    
    for (let fila = 0; fila < 5; fila++) {
        for (let col = 0; col < 5; col++) {
            const celdaDiv = document.createElement('div');
            celdaDiv.classList.add('celda');
            if (matrizLetraJ[fila][col] === 1) {
                celdaDiv.classList.add('amarilla');
            }
            
            contenedor.appendChild(celdaDiv);
        }
    }
}
construirGrilla();