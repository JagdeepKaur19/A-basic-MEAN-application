angular.module('loginApp')
.service('ForgotPasswordService', ['appConfig', '$resource',
function(appConfig, $resource){
    return {
        resource: function(){
            return $resource(appConfig.serviceUrl + '/forgotPass',{
                id : '@_id'

            }
        )
        }
    }
}])