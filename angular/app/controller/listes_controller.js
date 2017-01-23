angular.module('todos').controller('ListeController',['$scope','$http',

    function($scope, $http) {
        $http.defaults.headers.common.Authorization = 'e136279df7a442bba03351d0350a5f3c';
        $http.get('http://todos.api.netlor.fr/lists')
            .then(function(response) {
                $scope.liste = [];
                console.log(response.data);
                $scope.liste = response.data;
            });
    }
]);
