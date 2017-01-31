angular.module('todos').directive('liste', [function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/liste.html',
        link: function(scope, element, attrs) {
            scope.afficher = function() {
                scope.liste.afficher();
            }
            scope.supprimer = function() {
                scope.liste.supprimer();
            }
            scope.rename = function() {
                scope.liste.rename();
            }
        }
    };
}])
