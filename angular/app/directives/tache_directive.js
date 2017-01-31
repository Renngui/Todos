angular.module('todos').directive('tache', [function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/tache.html',
        link: function(scope, element, attrs) {
            scope.supprimer = function() {
                scope.tache.supprimer();
            }
        }
    };
}])
