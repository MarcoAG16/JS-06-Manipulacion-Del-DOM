
/*

DOM(Document Object Model/Modelo de objetos del documento)

Cuando creaos paginas que usan HTML + CSS estamos creando pagina sestaticas(porque no tienen interactividad),
cuando agregamos JS, nuestras paginas se convierten en sitios dinamicos (tienen interactividad).

El navegador lee el documento html de arriba a abajo, de izquierda a derecha (renderizacion)

Para que una pagina se renderize correctamente, se toma en cuenta el contenido, el peso de las imagenes, la conexion a internet, etc.

Cuando el documento se renderiza, se crea un "arbol"(DOM), tiene muchas ramas que son las etiuetas y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "hojas"(nodos).

Cuando hablamos del DOM y entendemos que se representa como un arbol con ramas y hojas, entendemos que se representa como un arbol con ramas y hojas, entendemos que cada una de estas ramas y hojas es un nodo.

Que es un nodo?
Representacion mas basica de lo que existe un DOM, puede ser un elemento o etiueta, puede ser un atributo, puede ser un texto, incluso un comentario.

    -Document: Nodo raiz, a partir del cual se derivan los demas nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el. Todos los nodos derivan de este.
    -Element:Son nodos definidos por etiquetas html (div, h1, p, img, meta, head, script, etc), ya que sea que se vean o no se vean (etiquetas que interpreta el navegador),

    -Text: eL Texto que hay dentro de un elemento se considera un nodo, con la caracteristica que es un nodo hijo.

    -Atribbutes: Los atributos de lsa etiuetas tambien se convierten en nodos. Son nodos que estan asociados a un elemento y se pueden considerar nodos hijos.

    -Comment:Los comentarios tambien son un nodo, orue forma parte del documento.


    ?Para que uilizamos JS en un DOM?




*/


//Comenzamos a trabajar con los nodos de mi documento HTMl

//1. paso Guardar los elementos HTML en variables de JS (let, var, const)

//Metodos selectores o de seleccion de elementos: Permiten traer una etiqueta de html y guardarla para su uso posterior.

    /*Metodos tradicionales
    -getElementByID(trae un elemento por ID)
    -getElementsByTagName
    -getElementsByClassName

*/
const nombrePaciente = document.getElementById("nombrePaciente");

console.log(nombrePaciente);
//Aqui obtengo un elemento por id
const columnas = document.getElementsByClassName("col");
//Aqui obtengo varios elementos por clase
console.log(columnas);

//Aqui obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input")
console.log(inputs);

/*
Metodos actuales

La unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos(. para las clases , # para las id)

    -document.querySelector
    -document.querySelectorAll
    */


    //Aqui obtengoun elemento por el selector #
   let containerPadre = document.querySelector("#containerPadre");
   console.log(containerPadre);


   //Aqui obtengo varios elementos por el selector .
   let containers = document.querySelectorAll(".container");
   console.log(containers);

   /*
   Metodos para modificar elementos

    -innerHTML: Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o elminiar el texto.

    -textContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto (crear un texto nuevo)



   */

    //Modificando el texto de un h1 con innerHTML
    let titulo = document.getElementById("titulo");

    titulo.innerHTML="nuevo texto de mi titulo";



    //creando un nuevo texto con innerHTML
  let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
  mensajeConfirmacion.innerHTML = "<p>Mensaje de confirmacion</p>"

  /*
    -Crear el elemento
        -createElement
        -createTextNode
        -createComment

    -Poner el elemento
        -append
        -appendChild
  */

        //Creando un elemento con createElement
        let imagen = document.createElement("img");


    //Crear los atributos de un elemento 
    imagen.src ="https://www-images.christianitytoday.com/images/35972.jpg";

    imagen.alt="Foto de usuario feliz";

    //Poner m imagen en el contenedor de mensaje confirmacion
    mensajeConfirmacion.appendChild(imagen);