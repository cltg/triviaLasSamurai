//Inica Mensaje de Bienvenida
alert("Bienvenida a la Trivia Samurai");
//preguntamos el nombreS

var name = prompt("Hola Samurai, \ndinos tu nombre");
//var message;

if (name === "null" || name === "") {
  //document.write("Usuario Anonimo");
  document.getElementById("usuarioAnonimo").innerHTML = "Usuario Anónimo";

} else {
  var reto = confirm( name + ", bienvenida a la trivia de Las Samurai \n En esta trivia podrás probar tu conocimiento previamente adquirido \n ¿Aceptas el reto?");
}
if (reto===true) {

  //document.write(name + ", bienvenida a la trivia de Las Samurai");
document.getElementById("usuarioAnonimo").innerHTML = name + ", bienvenida a la trivia de Las Samurai.";
  function check(){
//ESTA FUNCION SE ACTIVA AL SER CONVOCADA, COMO LA TRIVIA NECESITA ELEMENTOS DE HTML VARIAS VECES Y MODIFICARLO VARIAS VECES, LA FUNCION AYUDA A QUE AGRUPEMOS LAS SENTENCIAS Y LAS PODAMOS EJECUTAR VARIAS VECES, CUANDO SEA NECESARIO
    var pregunta1 = document.cuestionario.pregunta1.value; //NOMBRAR VARIABLES DE LAS PREGUNTAS Y DEL PUNTAJE
    var pregunta2 = document.cuestionario.pregunta2.value;
    var pregunta3 = document.cuestionario.pregunta3.value;
    var correcto = 0;
//INDICAMOS CUANDO ES QUE SE SUMA UN PUNTO AL PUNTAJE CON LA RESPUESTA CORRECTA
          if (pregunta1 == "Crear un archivo CSS separado y enlazarlo mediante una etiqueta HTML." ) {
            correcto ++;
          }

          if (pregunta2 == "Regresa el valor que contiene el div." ) {
            correcto ++;
          }

          if (pregunta3 == "margin" ) {
            correcto ++;
          }
//ESTO ES UN ARREGLO PARA QUE SE PUEDA NOMBRAR UNA VARIABLE Y DEFINIR VARIOS RESULTADOS DE UNA VEZ, ESTOS VALORES TIENEN RANGOS, EMPEZANDO POR EL 0
      var resultados = ["¡Excelente! Eres una Samurai Coder.",
      "¡Muy bien! Puedes mejorar aún más, así sigue afilando tu katana.",
      "¡Te falta mucha práctica, pequeña saltamontes! Por el momento regresa al dōjō para seguir entrenando.",
      "GAMEOVER Has caido en batalla por tu inexperiencia."];
      var imagenes = ["Imagenes/onnaBugeisha0.jpg", "Imagenes/onnaBugeisha1.jpg", "Imagenes/onnaBugeisha2.jpg", "Imagenes/onnaBugeisha3.jpg"];
//LO MISMO SE HACE CON UN ARREGLO PARA VARIABLE IMAGENES PARA TENER UN TEXTO CON IMAGENES
    //DESPUES DEFINIMOS UNA VARIABLE CON NOMBRE DE RANGO PARA EVALUAR LOS RESULTADOS DEL PUNTAJE DE MANERA CONDICIONAL, PARA QUE A CADA PUNTAJE, LE CORRESPONDA UNA RESPUESTA Y UNA IMAGEN COMO RESULTADO
      var rango;
           if (correcto > 2) {
             rango = 0
           }

           rango;
           if (correcto > 1 && correcto <3) {
             rango = 1
           }

           rango;
           if (correcto < 2 && correcto > 0) {
           rango = 2
           }

           rango;
           if (correcto < 1) {
           rango = 3
           }


//AQUI CONVOCAMOS A VARIAS SENTENCIAS A TRAVES DEL ID, PARA SER EJECUTADAS
  document.getElementById("contiendaFinalizada").style.visibility = "visible"; //AQUI PEDIMOS QUE ESTE DIV SE VUELVA VISIBLE EN ESTE MOMENTO

  document.getElementById("respuestasCorrectas").innerHTML = "Respondiste " + correcto + " Preguntas correctamente.";//AQUI PEDIMOS QUE SE DE UNA RESPUESTA CON EL PUNTAJE CALCULADO EN FORMATO HTML

  document.getElementById("resultados").innerHTML = resultados[rango];//AQUI SE PIDE QUE SE REGRESE EN FORMATO HTML LA FRASE CORRESPONDIENTE DE RESULTADOS, SEGUN EL PUNTUAJE OBTENIDO

  document.getElementById("imagenesResultados").src = imagenes[rango];//AQUI SE PIDE QUE SE MUESTRE UNA IMAGEN JUNTO CON EL TEXTO DEL RESULTADO
}
  }
 else {
   //SE PIDE INVOCAR EL ELEMENTO LLAMADO USUARIO ANONIMO, EN HTML, PARA QUE DIGA LA SIGUIENTE FRASE
document.getElementById("usuarioAnonimo").innerHTML = "¡Es una lástima que quieras abandonar el shogunato en este momento! <br> En otra ocasión podrás probar tus habilidades Samurai Coder.";
  document.getElementById("cuestionario").style.visibility = "hidden"; //AQUI SE INDICA QUE EL DIV CUESTIONARIO SE ESCONDA MIENTRAS SE DA EL MENSAJE HTML
}
