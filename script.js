$(document).ready(function () {
    $("#btn-toggle-theme").on("click", function () {
        $("body").toggleClass("dark-mode");
    });

    let fontSize = 16; 

    $("#btn-font-plus").on("click", function () {
        fontSize += 2;
        $("body").css("font-size", fontSize + "px");
    });

    $("#btn-font-minus").on("click", function () {
        if (fontSize > 12) { 
            fontSize -= 2;
            $("body").css("font-size", fontSize + "px");
        }
    });

    $(".fan-form").on("submit", function (evento) {
        let errores = [];

        const nombre = $("#nombre").val().trim();
        const email = $("#email").val().trim();
        const escena = $("#escena").val().trim();

        if (nombre === "") {
            errores.push("Por favor, completá tu nombre.");
        }

        if (email === "") {
            errores.push("Por favor, completá tu correo electrónico.");
        } else {
            const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (!emailRegex.test(email)) {
                errores.push("Ingresá un correo electrónico válido.");
            }
        }

        if (escena === "") {
            errores.push("Contanos al menos una escena que te haya emocionado.");
        }

        if (errores.length > 0) {
            evento.preventDefault();
            alert(errores.join("\n"));
        } else {
            alert("Tu respuesta ha sido enviada con éxito");
        }
    });
});