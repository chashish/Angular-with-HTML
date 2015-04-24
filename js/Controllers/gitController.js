(function(){

var app=angular.module("gitHubAPI",[]);

	var GitProfileController = function ( $scope,$http){

		var profileData = function(response){
			$scope.userDetails=response.data;
		};
		var errorHandling = function(response){
			$scope.errorReason="Unable to Connect with Git-Hub";
		};

		$http.get("https://api.github.com/users/chashish")
		.then(profileData,errorHandling);
	};

	app.controller("GitProfileController",GitProfileController);
}());