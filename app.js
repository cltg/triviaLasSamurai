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

    var pregunta1 = document.cuestionario.pregunta1.value;
    var pregunta2 = document.cuestionario.pregunta2.value;
    var pregunta3 = document.cuestionario.pregunta3.value;
    var correcto = 0;

          if (pregunta1 == "Crear un archivo CSS separado y enlazarlo mediante una etiqueta HTML." ) {
            correcto ++;
          }

          if (pregunta2 == "Regresa el valor que contiene el div." ) {
            correcto ++;
          }

          if (pregunta3 == "margin" ) {
            correcto ++;
          }

      var resultados = ["¡Excelente! Eres una Samurai Coder.",
      "¡Muy bien! Puedes mejorar aún más, así sigue afilando tu katana.",
      "¡Te falta mucha práctica, pequeña saltamontes! Por el momento regresa al dōjō para seguir entrenando.",
      "GAMEOVER Has caido en batalla por tu inexperiencia."];
      var imagenes = ["Imagenes/onnaBugeisha0.jpg", "Imagenes/onnaBugeisha1.jpg", "Imagenes/onnaBugeisha2.jpg", "Imagenes/onnaBugeisha3.jpg"];

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



  document.getElementById("contiendaFinalizada").style.visibility = "visible";

  document.getElementById("respuestasCorrectas").innerHTML = "Respondiste " + correcto + " Preguntas correctamente.";

  document.getElementById("resultados").innerHTML = resultados[rango];

  document.getElementById("imagenesResultados").src = imagenes[rango];
}
  }
 else {
  //document.write("¡Es una lástima que quieras abandonar el shogunato en este momento! <br> En otra ocasión podrás probar tus habilidades Samurai Coder.");
document.getElementById("usuarioAnonimo").innerHTML = "¡Es una lástima que quieras abandonar el shogunato en este momento! <br> En otra ocasión podrás probar tus habilidades Samurai Coder.";
  document.getElementById("cuestionario").style.visibility = "hidden";
}
