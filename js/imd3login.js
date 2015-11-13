  $(document).ready(function () {
    function login(){
            window.location.replace('index.html');
          };
            $("#register").jqxExpander({ toggleMode: 'none', width: '300px', showArrow: true });
            $('#sendButton').jqxButton({ width: 102, height: 25 });
            
            $('#sendButton').on('click', function (){
                $('#testForm').jqxValidator(login());
                });    
                
            
          
            // initialize validator.
            $('#testForm').jqxValidator({
                rules: [
                       { input: '#userInput', message: 'Username is required!', action: 'keyup, blur', rule: 'required' },
                       { input: '#userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', rule: 'length=3,12' },
                       { input: '#realNameInput', message: 'Real Name is required!', action: 'keyup, blur', rule: 'required' },
                       { input: '#realNameInput', message: 'Your real name must contain only letters!', action: 'keyup', rule: 'notNumber' },
                       { input: '#realNameInput', message: 'Your real name must be between 3 and 12 characters!', action: 'keyup', rule: 'length=3,12' },
                       {
                           input: '#birthInput', message: 'Your birth date must be between 1/1/1900 and 1/1/2014.', action: 'valueChanged', rule: function (input, commit) {
                               var date = $('#birthInput').jqxDateTimeInput('value');
                               var result = date.getFullYear() >= 1900 && date.getFullYear() <= 2014;
                               // call commit with false, when you are doing server validation and you want to display a validation error on this field. 
                               return result;
                           }
                       },
                       { input: '#passwordInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
                     
                      
                       
                       { input: '#emailInput', message: 'E-mail is required!', action: 'keyup, blur', rule: 'required' },
                       { input: '#emailInput', message: 'Invalid e-mail!', action: 'keyup', rule: 'email' },]
            });
        });