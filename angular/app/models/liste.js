angular.module('todos').service('Liste', ['$http', 'Tache',
    function($http, Tache) {
        var Liste = function(data) {
            this.id = data.id;
            this.label = data.label;
        }

        Liste.prototype.afficher = function() {
            Tache.afficher(this);
        }
        Liste.prototype.supprimer = function() {
            $http.delete('http://todos.api.netlor.fr/lists/'+this.id);
        }
        Liste.prototype.rename = function() {
            $http.put('http://todos.api.netlor.fr/lists/'+this.id, {"label":this.renommer});
        }
        Liste.ajouter = function(name){
            $http.post('http://todos.api.netlor.fr/lists', {"label":name});
        }
        return Liste;
    }
    test
]);
