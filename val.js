$(document).ready(function () {
  $('#miFormulario').submit(function (e) {
      e.preventDefault();

      $('.error').text('');
      $('input, select').removeClass('error-input');

      let esValido = true;

      const campos = ['name', 'lastname', 'email', 'fecha'];
      for (const selector of campos) {
          let identificador = `#${selector}`;
          if (!validarCampo(identificador)) esValido = false;
      }

      if (!validarRadio('genero')) esValido = false;

      if (esValido) {
          alert('Formulario enviado correctamente');
      }
  });
    
    function validarCampo(selector) {
        const campo = $(selector);
        const errorSpan = $(`${selector}Error`);
        let valid = true;

        if (campo.val() == '') {
          campo.addClass('error-input');
          errorSpan.text('El campo no puede estar vacío');
          valid = false;
      }

      if (selector === '#email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          valid = emailRegex.test(campo.val());
          if (!valid) {
              campo.addClass('error-input');
              errorSpan.text('No es un correo válido');
          }
      }

      return valid;
  }
    function validarRadio(name) {
      const campo = $(`#${name}`);
      const errorSpan = $(`#${name}Error`);
      let valid = true;

      if (campo.val() === '') {
          campo.addClass('error-input');
          errorSpan.text('Debe seleccionar una opción');
          valid = false;
      }

      return valid;
  }
  });