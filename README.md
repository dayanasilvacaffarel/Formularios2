# Formularios2
JSON y Storage
Valide campos
los errores si existian se mostraban al usuario mediiante una clase oculta 
si no hay errores se redirige al usuario: location.replace()
se envian datos localStorage.setItem('user', JSON.stringify(estadoUsuario));
se recupera info del localStorage localStorage.getItem('user'); y JSON.parse(datosEnJSON);
