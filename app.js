// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar nombres a la lista
function amigoSecreto() {
    // Obtener el valor del campo de texto
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un campo válido.");
        return; // Detener la ejecución si el campo está vacío
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);

    // Actualizar la lista de nombres en la interfaz
    actualizarListaAmigos();

    // Limpiar el campo de texto
    inputNombre.value = "";
    inputNombre.focus();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = ""; // Limpiar lista previa

    // Generar elementos <li> para cada nombre
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`; // Mostrar el índice y el nombre
        ulListaAmigos.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos personas para realizar el sorteo.");
        return;
    }

    if (listaAmigos.length % 2 !== 0) {
        alert("El número de jugadores debe ser par. Por favor, agregue otro jugador.");
        return;
    }

    // Crear una copia de la lista para asignar parejas
    const amigosDisponibles = [...listaAmigos];
    const resultado = [];

    while (amigosDisponibles.length > 0) {
        // Seleccionar un amigo al azar de la lista
        const indice1 = Math.floor(Math.random() * amigosDisponibles.length);
        const amigo1 = amigosDisponibles.splice(indice1, 1)[0];

        // Seleccionar otro amigo al azar
        const indice2 = Math.floor(Math.random() * amigosDisponibles.length);
        const amigo2 = amigosDisponibles.splice(indice2, 1)[0];

        // Guardar la pareja en el resultado
        resultado.push(`${amigo1} ↔ ${amigo2}`);
    }

    // Mostrar los resultados en el DOM
    mostrarResultados(resultado);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(resultado) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpiar resultados previos

    resultado.forEach((pareja) => {
        const li = document.createElement("li");
        li.textContent = pareja;
        ulResultado.appendChild(li);
    });
}

// Asociar las funciones a los botones
document.querySelector(".button-add").addEventListener("click", amigoSecreto);
document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
