angular
  .module('pokeApp')
  .controller('pokeController', pokeController);

  pokeController.$inject = ['$http'];

  function pokeController($http){

    var pokeCtrl = this;

    pokeCtrl.pokemon = {
      name: "",
      images: []
    };

    pokeCtrl.getPokemon = getPokemon;

    function getPokemon(num){
    $http.get('http://pokeapi.co/api/v1/pokemon/' + num)
      .success(function(data, status){
        pokeCtrl.pokemon.name = data.name;
      })
      .error(function(data, status){
        console.warn("hey i got status" + status);
      });
    }
      console.log(getPokemon);
}