var app = angular.module('myApp', []);

function MyController($scope, $http) {
		$scope.person={
			firstName:"Sk",
			lastName:"Niamutullah"
		};
        $scope.getDataFromServer = function() {alert(1);
                $http({
                        method : 'GET',
                        url : 'MyMongo'
                }).success(function(data, status, headers, config) {
                        $scope.person = data;
                }).error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                });
				$scope.getDataFromServer = function() {alert(1);
                $http({
                        method : 'GET',
                        url : 'UpdateData'
                }).success(function(data, status, headers, config) {
                        $scope.person = data;
                }).error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                });


        };
};