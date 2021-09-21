var app = angular.module('app', ['ngMaterial', 'md-steppers']);

app.controller('appCtrl', ['$scope','$timeout', function($scope,$timeout) {
  $scope.showHideSpinner = false;
  $scope.loadTransDetails = function(){
    alert("Imagine a beautiful transaction detail page being loaded ...");
  }
  $scope.goToFinish = function() {
    $scope.showHideSpinner = true;
    $timeout(function () {
        $scope.showHideSpinner = false;
      $scope.selected = 3;
    }, 1000);
    
  }
}]);

var nav = document.getElementById("navlinks");
var navlinks = nav.getElementsByClassName("navlink");

function setActiveLink() {
  for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}

setActiveLink();



/******//*************/
