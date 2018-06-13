angular.module('loginApp')
.controller('ForgotPasswordController', ['$state', '$rootScope', 'appConfig', 'ForgotPasswordService',
function($state, $rootScope, appConfig, ForgotPasswordService){
    var vm = this;

    init();
    function init(){

    }
vm.data = ['What is your pet name?', 'What is the name of your best friend?','What is your first teacher name?']
    
    vm.forgotPassword = function(){
        var newPass = {
            "email" : vm.pass.email,
            "answer": vm.pass.answer
            }
            console.log(newPass);
        ForgotPasswordService.resource(appConfig).forgotPassword(newPass ,
        function(response){
            console.log(response);
        }, function(error){
            console.log("error");
        })
    }
}])