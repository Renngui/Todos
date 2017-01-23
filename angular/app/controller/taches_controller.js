angular.module('todos').controller('TacheController', ['$scope', 'Tache',
    function($scope, Tache) {
        $scope.tache = Tache;
    }
]);
