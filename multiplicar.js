"use strict";

function generarTablas() {


   

    const inputNumero =
        document.getElementById("txtNumero");


   

    const numero =
        Number(inputNumero.value);


   

    const contenedor =
        document.getElementById(
            "contenedorTabla"
        );


    

    const mensaje =
        document.getElementById(
            "mensaje"
        );


   
    if (inputNumero.value === "") {

        mensaje.textContent =
            "Ingresa un número para generar la tabla.";

        inputNumero.focus();

        return;
    }


    let contenido = "";


   

    contenido +=
        '<div class="titulo-tabla">' +
        'Tabla del ' +
        numero +
        '</div>';




    for (
        let i = 1;
        i <= 10;
        i++
    ) {


   

        let resultado =
            numero * i;


    
        contenido +=
            '<div class="fila">' +

                '<span>' +
                    numero +
                    ' × ' +
                    i +
                '</span>' +

                '<strong>' +
                    resultado +
                '</strong>' +

            '</div>';


      

        console.log(
            numero +
            " x " +
            i +
            " = " +
            resultado
        );

    }




    contenedor.innerHTML =
        contenido;


    

    mensaje.textContent =
        "Tabla del " +
        numero +
        " generada correctamente.";

}