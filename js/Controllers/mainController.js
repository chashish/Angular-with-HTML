var MainController = function($scope){
	$scope.message="Hello. Angular!";

	var person={
		firstName:"Ashish",
		lastName:"Choudhary"
	};

	$scope.person=person;
};

var SubMainController = function($scope){
	$scope.message="Hello Sub Angular!";
};