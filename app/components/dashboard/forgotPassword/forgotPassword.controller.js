angular.module('loginApp')
.controller('ForgotPasswordController', ['$state', '$rootScope', 'appConfig', 'ForgotPasswordService',
function($state, $rootScope, appConfig, ForgotPasswordService){
    var vm = this;

    init();
    function init(){

    }
    
    vm.data = ['What is your pet name?', 'What is the name of your best friend?','What is your first teacher name?']
    
    vm.forgotPassword = function(){
        ForgotPasswordService.resource(appConfig).forgotPassword({
            newPass = {
            "email" : vm.pass.email,
            "answer": vm.pass.answer
            }
            //console.log(newPass);
        },
        function(response){
            console.log("")
        }, function(error){
            console.log("error");
        })
    }
}])