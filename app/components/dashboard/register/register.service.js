angular.module('loginApp')
.service('RegisterService', ['appConfig', '$resource', 
function(appConfig, $resource){
    return {
        resource: function(){
            return $resource(appConfig.serviceUrl + '/register', {
                id: '@_id'
            }, {
                registerUser: {
                    method: 'POST',
                    url: appConfig.serviceUrl + '/register'
                }
            })
        }
    }
}])