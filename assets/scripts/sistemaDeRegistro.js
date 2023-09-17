/*
Sistema para registrar pacientes y mostrarlos en tarjetas

*/
console.log("alive")
//Primer paso: Obtener todos los elementos de nuestro HTML y guardarlos en variables de JS

//Inputs separados, boton, textoConfirmacion

let nombrePaciente = document.getElementById("nombrePaciente"); //input nombre
let edadPaciente = document.getElementById("edadPaciente");//input edad
let botonRegistrarPaciente = document.getElementById("btnRegistrarPaciente");//boton
let textoConfirmacion = document.getElementById("mensajeConfirmacion");//container mensaje confirmacion


//Array para almacenar a mis pacientes 
let pacientes = [];

//Funcion para registrar un nuevo paciente
function registrarPaciente(){

    //Obtengo el atributo value de mi input
    let valorNombrePaciente = nombrePaciente.value;
    let valorEdadPaciente = edadPaciente.value;

    //Array para guardar la informacion del paciente
    let paciente ={
        nombre: valorNombrePaciente, //tomo el valor del input y lo asigno a esta variable
        edad: valorEdadPaciente,//tomo el valor del input y lo asigno a esta variable
        citas:[]
    };

    //Cuando tengo la informacaion del paciente...
    pacientes.push(paciente); //array.push(valorAgregar)
    //1 muestro info en la consola
    mostrarInfoPaciente(paciente);//Invocacion de otra funcion

    //2 muestro mensaje de confirmacion(textContent)
    mensajeConfirmacion.textContent="Paciente registrado correctamente"
    //3 generola tarjeta
    generarTarjetaPaciente(paciente);//Invocacion de una funcion para generar tarjetas

    return paciente;

    


}

// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");
    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });
}//Aqui termina mi funcion mostrarInfoPaciente

//Funcion para generar tarjetas de pacientes
function generarTarjetaPaciente(paciente){
    //Crear
    let tarjetaDiv = document.createElement("div");//Aqui creo un container para mi tarjeta
    tarjetaDiv.className="col col-sm-12 col-md-6 col-lg-4";//aqui le especifico que es una columna

    //Crear el contenido de la tarjeta
    tarjetaDiv.innerHTML= `
    <div class="card border-info mb-3">
        <div class="card-header">Paciente</div>
            <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
        </div>
    </div>
`


    //Poner
    contenedorTarjetas.appendChild(tarjetaDiv);

}//cierra funcion crearTarjeta

//evento

botonRegistrarPaciente.addEventListener('click',registrarPaciente);
