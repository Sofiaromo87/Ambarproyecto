// Declaración de variables con var, let y const

// Información del usuario
var firstName = "Samantha";
var lastName = "Jimenez";

// Mostrar el nombre completo en la consola
console.log(Nombre: ${firstName} ${lastName}); 

// Modificación de la variable firstName
firstName = "Fernanda"; // Se cambia el nombre

// Variables numéricas
let myAge = 99;
let myHeight = 100;

console.log(Edad : ${myAge}, Altura: ${myHeight} cm);
// Booleanos (Valores true/false)
let isStudent = true; 

// Operaciones matemáticas básicas
let num1 = 10;
let num2 = 12;

// Impresión de resultados en la página web
document.write(<p>El resultado de la suma es = ${num1 + num2}</p>);
document.write(<p>El resultado de la resta es = ${num1 - num2}</p>);
document.write(<p>El resultado de la multiplicación es = ${num1 * num2}</p>);
document.write(<p>El resultado de la división es = ${(num1 / num2).toFixed(3)}</p>);

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

// Función para registrar un contacto
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

// Prueba de valores en la consola
console.log("Operaciones matemáticas:");
console.log(Suma: ${num1 + num2});
console.log(Resta: ${num1 - num2});
console.log(Multiplicación: ${num1 * num2});
console.log(División: ${(num1 / num2).toFixed(3)});

