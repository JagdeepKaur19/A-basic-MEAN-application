angular.module('loginApp')
.controller('MainController', ['$state', '$rootScope',
function($state, $rootScope){
    var vm = this;
    vm.$state = $state;
    return vm;
}])