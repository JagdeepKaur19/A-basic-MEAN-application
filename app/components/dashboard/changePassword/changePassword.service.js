angular.module('loginApp')
.service('ChangePasswordService', ['appConfig', '$resource', 
function(appConfig, $resource){
return {
    resource: function(){
        return $resource(appConfig.serviceUrl + '/changePassword', {
            id : '@_id'
        }, {
            changePassword: {
                method: 'PUT',
                url: appConfig.serviceUrl + '/changePassword'
            }
        })
      
    }
}

}])