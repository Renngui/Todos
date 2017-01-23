angular.module('todos').directive('liste',
  [function(){
    return {
      restrict: 'E',
      templateUrl: 'app/templates/liste.html',
    };
  }])
