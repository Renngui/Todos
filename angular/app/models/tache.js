angular.module('todos').service('Tache', [function($http) {
    var tache = function(){
        
    };
    tache.afficher = function(data) {
        tache.currentListe = data;
    };

    return tache;

}]);
