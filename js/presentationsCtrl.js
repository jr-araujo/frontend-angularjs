angular.module("presentations", []);
angular.module("presentations").controller("presentationsCtrl", function($scope, $http) {
    var baseUrl = "http://node-redis-sample.azurewebsites.net/";
    
    $scope.app = "Presentation Registration";
    $scope.events = [];
    
    var listAllEvents = function() {
        $http.get(baseUrl + "list-events")
            .success(function(data) {
                $scope.events = data;
            });
    };
    
    $scope.addPresentation = function(presentation) {
        $http.post(baseUrl + "presentation", presentation)
            .success(function() {
                delete $scope.presentation;
                alert("Presentation registered Successfully");
            })
            .error(function(data, status) {
                alert("An error ocurred at trying to register the presentation");
            });
    };
    
    listAllEvents();
});