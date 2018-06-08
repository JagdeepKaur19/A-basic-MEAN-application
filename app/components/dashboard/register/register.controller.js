angular.module('loginApp')
.controller('RegisterController', ['$state', '$rootScope', 'appConfig', 'RegisterService',
function($state, $rootScope, appConfig, RegisterService){
    var vm = this;

    init();
    function init(){
    }

    vm.data = ['What is your pet name?', 'What is the name of your best friend?','What is your first teacher name?']
            
    vm.registerUser = function(){
        var userRegister = {
            "firstname": vm.user.firstname,
            "lastname": vm.user.lastname,
            "email": vm.user.email,
            "phone": vm.user.phone,
            "username": vm.user.username,
            "password": vm.user.password,
            "question": vm.user.question,
            "answer": vm.user.answer

        }
        console.log(userRegister);
        RegisterService.resource(appConfig).registerUser(userRegister, 
            function(response){
                console.log(response);
                $state.go('dashboard');
            }, function(error){
                console.log(error);
            });
    }
}])