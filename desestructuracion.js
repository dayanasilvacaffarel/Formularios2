// Desestructurando Arrays
const nombres = ["Pedro", "Laura", "Enrique", "Flor"];

// const nombre1 =nombres[0];
// const nombre2 =nombres[1];
// const nombre3 =nombres[2];
// const nombre4 =nombres[3];

// Desestructuración

const [nombre1, , , nombre4] = nombres;

console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);
console.log(nombre4);

// Desestructurando objetos

const estudiante = {
    nombre: "Carlos",
    apellido: "Gutierrez",
    DNI: 25454545
}

const { nombre, apellido, dni } = estudiante;

console.log(nome);
console.log(surname);
console.log(DNI);
/* ----------------------------- MESA DE TRABAJO ---------------------------- */
// 1. Levantar el objeto desde el localStorage con key=LISTADO
// 2. Devolver un array con nombre y apellido de las personas mayores a 18 años (hay que usar map y filter)
// 3. Volver a guardarlo en localStorage bajo el mismo key
// 4. Mostrar por consola el resultado, asegurándose de que sea el requerido

localStorage.setItem("LISTADO",
    [{
    nombre: "Pedro",
    apellido: "Gomez", 
    nacimiento: "11/05/1998"},
    { 
    nombre: "Joaquin", 
    apellido: "Sotto", 
    nacimiento: "21/10/1985" },
    { 
    nombre: "Gabriela", 
    apellido: "Perez", 
    nacimiento: "02/02/2010" },
    { 
    nombre: "Agustina", 
    apellido: "Estevez", 
    nacimiento: "21/08/1986" },
    { 
    nombre: "Paola", 
    apellido: "Serra", 
    nacimiento: "22/09/2009" },
    { 
    nombre: "Juan", 
    apellido: "Coprez", 
    nacimiento: "12/04/1977" }
]);
