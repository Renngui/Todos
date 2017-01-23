angular.module('todos').controller('ListesController', ['$scope', '$http', 'Liste',
    function($scope, $http, Liste) {
        $http.defaults.headers.common.Authorization = 'e136279df7a442bba03351d0350a5f3c';
        $http.get('http://todos.api.netlor.fr/lists')
            .then(function(response) {
                    $scope.listes = [];
                    console.log(response);
                    console.log(response.data);
                    console.log(response.data.listes);
                    response.data.forEach(function(data) {
                        var newListe = new Liste(data);
                        $scope.listes.push(newListe);
                    });
                },
                function(error) {
                    console.log(error);
                });

        $scope.ajouter=function(){
          Liste.ajouter($scope.add);
        }
    }
]);
