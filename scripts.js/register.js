// Constructor para Contacto
function Contacto(nombre, email, mensaje) {
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
}

// Obtener los inputs del formulario de contacto
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");

function register() {
    // Validar campos vacíos
    if (inputNombre.value.trim() === "" || inputEmail.value.trim() === "" || inputMensaje.value.trim() === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Crear objeto de contacto
    let nuevoContacto = new Contacto(inputNombre.value, inputEmail.value, inputMensaje.value);

    // Mostrar en consola
    console.log("Nuevo contacto registrado:", nuevoContacto);

    // Limpiar el formulario después de registrar
    inputNombre.value = "";
    inputEmail.value = "";
    inputMensaje.value = "";

    alert("Registro exitoso. Gracias por tu mensaje.");
}