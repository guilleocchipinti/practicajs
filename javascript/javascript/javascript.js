


    function numerosPares() {
    var listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    for (var  i = 0; i < listaNumeros.length; i++) {
        var esPar = listaNumeros[i] % 2;
        if (esPar == 0) {
            console.log(listaNumeros[i] + " es par");
        } else {
            console.log(listaNumeros[i] + " es impar");
        }
    }
}
numerosPares();






    function ParoImpar(numero) {
    if (numero % 2 === 0) {
    console.log(numero + " es un número par");
    } else {
    console.log(numero + " es un número impar");
    }
    }
    var numero = 4;
    ParoImpar(numero);
    





    var frutas = ["Frutilla", "Banana", "Arándano"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);





    var frutas = ["Frutilla","Banana","Sandía"];
function agregarFruta(fruta) {
frutas.push(fruta);
}
agregarFruta('Pera');
console.log(frutas);







    var frutas = ["Frutilla","Banana","Sandía"];
    
    for (var i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
    




    var frutas = ["Frutilla", "Banana", "Arándano"];
function ChequearLongitud(frutas) {
    if (frutas.length % 2 === 0) {
        console.log('La longitud del array es par.');
    } else {
        console.log('La longitud del array es impar.');
    }
}

ChequearLongitud(frutas); 



        var frases = [
            "Sorry, I can't see facts through all of my fury - Happines",
            "Did you hear about the girl who lives in delusion? - rwylm",
            "Please don't ever become a stranger whose laugh I could recognize anywhere - New Years Day",
            "The skeletons in both our closets plotted hard to f this up - Cowboy Like Me"
        ]

        function mostrarFraseAleatoria() {
            var fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
            document.getElementById('fraseAleatoria').innerText = fraseAleatoria;
        }

        mostrarFraseAleatoria();




    function ApruebaoReprueba(nombre, nota) {
        const NotaFinal = document.getElementById("nota");
        if (nota > 4) {
            NotaFinal.innerHTML = "El alumno " + nombre + " aprobó.";
        } else {
            console.log("El alumno " + nombre + " reprobó la cursada.");
        }
    }

    var nombreAlumno = "Guillermina";
    var notaAlumno = 10; 
    ApruebaoReprueba(nombreAlumno, notaAlumno);



    var equipoAzul = ["Julieta", "Guillermina", "Violeta"];
    var equipoAmarillo = ["Tamara", "Camila", "Angeles"];

    function AmarillooAzul(jugador) {
        for (var i = 0; i < equipoAzul.length; i++) {
            if (equipoAzul[i] === jugador) {
                document.getElementById("equipo").innerHTML = "El jugador " + jugador + " es del equipo azul.";
                return;
            }
        }

        for (var j = 0; j < equipoAmarillo.length; j++) {
            if (equipoAmarillo[j] === jugador) {
                document.getElementById("equipo").innerHTML = "El jugador " + jugador + " es del equipo amarillo.";
                return;
            }
        }

    }

AmarillooAzul("Guillermina");


    var equipoAzul = ["Julieta", "Guillermina", "Violeta"];
    var equipoAmarillo = ["Tamara", "Camila", "Angeles"];

    function TodosLosEquipos(jugador) {
        if (jugador.toLowerCase() === "todos") {
            var equipoCompleto = "Equipo Azul: " + equipoAzul + ". Equipo Amarillo: " + equipoAmarillo + ".";
            document.getElementById("equipos").innerHTML = equipoCompleto;
            return;
        }

        for (var i = 0; i < equipoAzul.length; i++) {
            if (equipoAzul[i] === jugador) {
                document.getElementById("equipos").innerHTML = "El jugador " + jugador + " es del equipo azul.";
                return;
            }
        }

        for (var j = 0; j < equipoAmarillo.length; j++) {
            if (equipoAmarillo[j] === jugador) {
                document.getElementById("equipos").innerHTML = "El jugador " + jugador + " es del equipo amarillo.";
                return;
            }
        }

        document.getElementById("equipos").innerHTML = "El jugador " + jugador + " no está en ningún equipo.";
    }

    TodosLosEquipos("todos");
