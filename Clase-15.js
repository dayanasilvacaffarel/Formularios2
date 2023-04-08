// Vamos implementar esta funcion en el script de Clase 13 al principio.
// La idea es que antes de la carga de la window hagamos un chequeo del Storage.
/* -------------------------------------------------------------------------- */
/*                [10] FUNCION: chequeamos si existe un usuario               */
/* -------------------------------------------------------------------------- */

function chequearUsuarioValido() {

    // 👇 objeto que obtenemos del storage
    const usuario = JSON.parse(localStorage.getItem('user'));


    // chequeamos las propiedades del objeto


    if (usuario !== null) {
        // 👇utilizamos destructuring para separar las variables
        const { email, password, rol, terminos } = usuario;
        console.log("Usuario");
        console.log(`-> ${email}\n-> ${password}\n-> ${rol}\n-> ${terminos}`);
    } else {
        location.replace('./')
        localStorage.clear();
    }

}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
// 1. Levantar el objeto desde el localStorage con key=LISTADO
// 2. Devolver un array con nombre y apellido de las personas mayores a 18 años (hay que usar map y filter)
// 3. Volver a guardarlo en localStorage bajo el mismo key
// 4. Mostrar por consola el resultado, asegurándose de que sea el requerido

localStorage.setItem("LISTADO",JSON.stringify(
    [{ "nombre": "Pedro", "apellido": "Gomez", "nacimiento": "11/05/1998" }, 
    { "nombre": "Joaquin", "apellido": "Sotto", "nacimiento": "21/10/1985" }, 
    { "nombre": "Gabriela", "apellido": "Perez", "nacimiento": "02/02/2010" }, 
    { "nombre": "Agustina", "apellido": "Estevez", "nacimiento": "21/08/1986" }, 
    { "nombre": "Paola", "apellido": "Serra", "nacimiento": "22/09/2009" }, 
    { "nombre": "Juan", "apellido": "Coprez", "nacimiento": "12/04/1977" }]));

// const personas = JSON.parse(localStorage.getItem("LISTADO"));
// console.log(personas);

// const personasmayores = personas.filter(personas=>personas.nacimiento.substring(6,10)<=2003);//esto no lo entiende ni Einstein
// console.log(personasmayores);

//localStorage.setItem("LISTADO",JSON.stringify(personasmayores));
const lista = JSON.parse(localStorage.getItem("LISTADO"));

const filtrados = lista.filter((persona) => {
  const fechaNacimiento = new Date(persona.nacimiento);
  const edad = new Date(Date.now() - fechaNacimiento.getTime()).getFullYear() - 1970;
  return edad >= 18;
});

console.log(filtrados);





