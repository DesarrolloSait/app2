  $(document).ready(function () {
            $("#register").jqxExpander({ toggleMode: 'none', width: '300px', showArrow: false });
            $('#sendButton').jqxButton({ width: 90, height: 25 });
            $('#acceptInput').jqxCheckBox({ width: 130 });
            $('#sendButton').on('click', function () {
                $('#testForm').jqxValidator('validate');
            });
            $("#ssnInput").jqxMaskedInput({ mask: '###-##-####', width: 150, height: 22  });
            $("#phoneInput").jqxMaskedInput({ mask: '(###)###-####', width: 150, height: 22  });
            $("#zipInput").jqxMaskedInput({ mask: '#####-####', width: 150, height: 22  });
            $('.text-input').jqxInput({  });
            $('#birthInput').jqxDateTimeInput({ width: 150, height: 22, value: new Date(2015, 0, 1) });
            // initialize validator.
            $('#testForm').jqxValidator({
                rules: [
                       { input: '#userInput', message: 'Se requiere nombre de usuario!', action: 'keyup, blur', rule: 'required' },
                       { input: '#userInput', message: 'Tu nombre de usuario debe estar entre 3 y 12 caracteres!', action: 'keyup, blur', rule: 'length=3,12' },
                       { input: '#realNameInput', message: 'Se requiere nombre completo', action: 'keyup, blur', rule: 'required' },
                       { input: '#realNameInput', message: 'Tu nombre solo debe de tener letras!', action: 'keyup', rule: 'notNumber' },
                       { input: '#realNameInput', message: 'Tu nombre debe de estar entre 3 y 12 caracteres!', action: 'keyup', rule: 'length=3,12' },
                       {
                           input: '#birthInput', message: 'Tu fecha de nacimiento debe de estar entre 1/1/1900 y 1/1/2015.', action: 'valueChanged', rule: function (input, commit) {
                               var date = $('#birthInput').jqxDateTimeInput('value');
                               var result = date.getFullYear() >= 1900 && date.getFullYear() <= 2015;
                               // call commit with false, when you are doing server validation and you want to display a validation error on this field. 
                               return result;
                           }
                       },
                       { input: '#passwordInput', message: 'Se requiere contraseña!', action: 'keyup, blur', rule: 'required' },
                       { input: '#passwordInput', message: 'Tu contraseña debe de estar entre 4 y 12 caracteres!', action: 'keyup, blur', rule: 'length=4,12' },
                       { input: '#passwordConfirmInput', message: 'Se requiere confirmacion de contraseña!', action: 'keyup, blur', rule: 'required' },
                       {
                           input: '#passwordConfirmInput', message: 'La contraseña no coincide!', action: 'keyup, focus', rule: function (input, commit) {
                               // call commit with false, when you are doing server validation and you want to display a validation error on this field. 
                               if (input.val() === $('#passwordInput').val()) {
                                   return true;
                               }
                               return false;
                           }
                       },
                       { input: '#emailInput', message: 'Se requiere correo electronico!', action: 'keyup, blur', rule: 'required' },
                       { input: '#emailInput', message: 'Correo electronico invalido!', action: 'keyup', rule: 'email' },
                       { input: '#ssnInput', message: 'NSS invalido!', action: 'valuechanged, blur', rule: 'ssn' },
                       { input: '#phoneInput', message: 'Numero de telefono invalido!', action: 'valuechanged, blur', rule: 'phone' },
                       { input: '#zipInput', message: 'Codigo postal invalido!', action: 'valuechanged, blur', rule: 'zipCode' },
                       { input: '#acceptInput', message: 'Debes de aceptar terminos', action: 'change', rule: 'required', position: 'right:0,0' }]
            });
        });