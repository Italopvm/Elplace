angular.module('myApp',[]);

angular.module('myApp')
	.controller('myController',[
			'$scope',
			myCtrl
		]);
function myCtrl($scope){





	$scope.hideOnClick = true;
	$scope.hide1 = true;
		
	$scope.clickHandler = function(){
		$scope.hideOnClick = false;
		$scope.hide1 = false;
		$scope.hide2 = true;

		$scope.hideText = function(userInput){
			$scope.hide1 = true;
	   		$scope.hide2 = false;
		}
	}

	//grabbing second set of form values 'address'
	$scope.hideAway = true;
	$scope.hiding = true;

	$scope.eventTrigger = function(){
		$scope.hiding =false;
		$scope.hideAway = false;
		$scope.showing = true;
	
	//firing second click handler ng-click="hideAddress"
		$scope.hideAddress = function(userInput2){
			$scope.hiding = true;
			$scope.showing = false;
		}
	}


	$scope.youGonHide = true;
	$scope.hidemchide = true;

	$scope.userEventTrigger = function(){
		$scope.youGonHide = false;
		$scope.hidemchide = false;
		$scope.bettaHide = true;
		//firing third click handler ng-click="hideWebsite"
		$scope.hideWebsite = function(userInput3){
			$scope.hidemchide = true;
			$scope.bettaHide = false;
		}
	}

	


}











