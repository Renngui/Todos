angular.module('todos').service('Tache',
    [function($http) {
        var tache = {
            affiche_listes: []
        };
        tache.afficher = function(data) {
            tache.affiche_products.push(data);
        };

        return tache;

    }
]);
