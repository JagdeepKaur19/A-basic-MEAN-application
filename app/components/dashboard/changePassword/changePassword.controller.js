angular.module('loginApp')
.controller('ChangePasswordController', ['$state', '$rootScope', 'appConfig', 'ChangePasswordService',
function($state, $rootScope, appConfig, ChangePasswordService){
var vm = this;

init();
function init(){

}
vm.changePassword = function(){
    var user = {
        'email' : vm.user.email,
        'oldPass': vm.user.oldPass,
        'newPass': vm.user.newPass
    }
    console.log(user);
    ChangePasswordService.resource(appConfig).changePassword(user,
    function(response){
        console.log(response);
        $state.go('home');
    }, function(error){
        console.log(error);
    });
}

}])