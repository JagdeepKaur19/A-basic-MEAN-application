angular.module('loginApp')
.controller('LoginController', ['$state', '$rootScope', 'appConfig', 'LoginService',
function($state, $rootScope, appConfig,LoginService){
    var vm = this;
    
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

    init();
    function init(){
      
    }

    vm.loginUser = function(){
        var profile = {
            "username": vm.user.username,
            "password": vm.user.password
        }
        console.log(profile);
        LoginService.resource(appConfig).loginUser(profile,function(response){
           console.log(response) ;
           if(!response.status){
              toast({
                type: 'error',
                title: 'Login Failed'
              })
           }else{
               toast({
                   type: 'success',
                   title: 'Signed in successfully'
               })
               $state.go('dashboard');
           }
           
        }, function(error){
            console.log(error);
        });
    }
}])