angular.module('todos').service('Tache', ['$http',
    function($http) {
        var tache = function(data) {
            this.id = data.id;
            this.text = data.text;
        }
        tache.afficher = function(data) {
            tache.currentListe = data;
        }
        tache.ajouter = function(name) {
            $http.post('http://todos.api.netlor.fr/lists/' + tache.currentListe.id + '/todos', {
                "text": name
            });
        }
        tache.prototype.rename = function() {
            $http.put('http://todos.api.netlor.fr/lists/' + tache.currentListe.id + '/todos' + this.id, {
                "text": this.renommer
            });
        }
        tache.prototype.terminer = function() {
            $http.put('http://todos.api.netlor.fr/lists/' + tache.currentListe.id + '/todos' + this.id + '/done');
        }
        tache.prototype.nonterminer = function() {
            $http.put('http://todos.api.netlor.fr/lists/' + tache.currentListe.id + '/todos' + this.id + '/undone');
        }
        tache.supprimer = function() {
            $http.delete('http://todos.api.netlor.fr/lists/' + tache.currentListe.id + '/todos' + this.id);
        }
        return tache;
    }
]);
