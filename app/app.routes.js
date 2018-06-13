angular.module('loginApp')
.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('dashboard' , {
        url: '/dashboard',
        controller: 'DashboardController',
        controllerAs: 'DCTRL',
        templateUrl: 'app/components/dashboard/dashboard.view.html',
        authenticate: true
    })

    .state('home', {
        url: '/home',
        controller: 'HomeController',
        controllerAs: 'HCTRL',
        templateUrl: 'app/components/dashboard/home/home.view.html'
    })

    .state('login', {
        url: '/login',
        controller: 'LoginController',
        controllerAs: 'LCTRL',
        templateUrl: 'app/components/dashboard/login/login.view.html'
    })

    .state('register', {
        url: '/register',
        controller: 'RegisterController',
        controllerAs: 'RCTRL',
        templateUrl: 'app/components/dashboard/register/register.view.html'
    })

    .state('passwordReset', {
        url: '/passwordReset',
        controller: 'ForgotPasswordController',
        controllerAs: 'FPCTRL',
        templateUrl: 'app/components/dashboard/forgotPassword/forgotPassword.view.html'
    })

    .state('changePassword', {
        url: '/changePassword',
        controller: 'ChangePasswordController',
        controllerAs: 'CPCTRL',
        templateUrl: 'app/components/dashboard/changePassword/changePassword.view.html'
    })

    $urlRouterProvider.otherwise('/dashboard')
}])
.run(['$rootScope', '$state',
    function ($rootScope, $state) {
      $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

      });
    }]);