angular.module('todos').service('Tache', ['$http',
    function($http) {
        var tache = function(data) {
            this.id = data.id;
            this.text = data.text;
        }

        tache.afficher = function(data) {
            tache.currentListe = data;
        };
        tache.supprimer = function() {
            $http.delete('http://todos.api.netlor.fr/lists/' + tache.currentListe.id + '/todos' + this.id);
        }
        tache.ajouter = function(name) {
            $http.post('http://todos.api.netlor.fr/lists/' + tache.currentListe.id + '/todos', {
                "text": name
            });
        }
        return tache;
    }
]);
