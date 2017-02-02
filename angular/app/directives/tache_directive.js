angular.module('todos').directive('tache', [function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/tache.html',
        link: function(scope, element, attrs) {

            scope.supprimer = function() {
                scope.Tache.supprimer();
            }
            scope.rename = function() {
                scope.tache.rename();
            }
            scope.terminer = function() {
                scope.tache.terminer();
            }
            scope.nonterminer = function() {
                scope.tache.nonterminer();
            }
        }
    };
}])
