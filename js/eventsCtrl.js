angular.module("events", []);
angular.module("events").controller("eventsCtrl", function($scope, $http) {
    // var baseUrl = "http://localhost:8080/";
    var baseUrl = "http://gab-node-sample.azurewebsites.net/";
    $scope.app = "Event Registration";
    $scope.appList = "Events List";
    $scope.events = [];
    $scope.presentations = [];
    
    var listAllEvents = function() {
        $http.get(baseUrl + "event")
            .success(function(data) {
                $scope.events = data;
            })
            .error(function(data, status) {
                console.log(data);
                console.log(status);
                alert("An error ocurred at trying to list the events.");
            });
    };
    
    $scope.listAllPresentationsByEventName = function(eventName) {
        $http.get(baseUrl + "presentation/" + eventName)
            .success(function(data) {
               $scope.presentations = data;
            })
            .error(function (data, status) {
                console.log(data);
                console.log(status);
                alert("An error ocurred at trying to list the presentations.");
            });
    };
    
    $scope.addEvent = function(event) {
        $http.post(baseUrl + "event", event)
            .success(function() {
                delete $scope.event;
                listAllEvents();
                alert("Event registered Successfully");                
            })
            .error(function (data, status) {
                console.log(data);
                console.log(status);
                alert("An error ocurred at trying to register the event");                
            });
    };
    
    listAllEvents();
});