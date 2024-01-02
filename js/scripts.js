let formulario = document.getElementById('contactForm');
let btnEnviar = document.getElementById('submitButton');


formulario.onsubmit = (e) => {
    e.preventDefault();
    let nombre = e.target[0].value;
    let mail = e.target[1].value;
    let number = e.target[2].value;
    let msg = e.target[3].value;

    let data = {
        service_id: 'service_9e6cphm',
        template_id: 'template_m6la34b',
        user_id: 'hWR3EW16mXhfMAwNI',
        template_params: {
            'user_name': nombre,
            'user_email': mail,
            'user_celular': number,
            'message': msg
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Mensaje enviado con éxito",
            showConfirmButton: false,
            timer: 1500
        });
        formulario.reset();
    }).fail(function (error) {
        Swal.fire({
            icon: "error",
            title: "Oops... " + JSON.stringify(error),
            text: "Error al enviar el mensaje",
          });
    });
}


