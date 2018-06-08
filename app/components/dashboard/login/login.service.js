angular.module('loginApp')
.service('LoginService', ['appConfig', '$resource',
function(appConfig, $resource){
    return {
        resource: function(){
            return $resource(appConfig.serviceUrl + '/login', {
                id: '@_id'
            }, {
                loginUser: {
                    method: 'POST',
                    url: appConfig.serviceUrl + '/login'
                }
            })
        }
    }

}])