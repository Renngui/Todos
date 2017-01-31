angular.module('todos').controller('TacheController', ['$scope', '$http', 'Tache',
    function($scope, $http, Tache) {
        $scope.currentListe = Tache.currentListe;
        $scope.$watch(function() {
            return Tache.currentListe;
        }, function(newValue, oldValue) {
            if (newValue) {
                $http.defaults.headers.common.Authorization = 'e136279df7a442bba03351d0350a5f3c';
                $http.get('http://todos.api.netlor.fr/lists/' + newValue.id + '/todos')
                    .then(function(response) {
                            $scope.taches = [];
                            console.log(response);
                            console.log(response.data);
                            response.data.forEach(function(data) {
                                //var newTache = new Tache(data);
                                $scope.taches.push(data);
                            });
                        },
                        function(error) {
                            console.log(error);
                        });
            }
        });
        $scope.ajouter = function() {
            Tache.ajouter($scope.add);
        }
    }
]);
