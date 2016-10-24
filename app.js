var heroesData = [
  {
    name: "Superman",
    phoneNumber: "888-88call-el",
    comic: "DC"
  }, {
    name: "Spiderman",
    phoneNumber: "212-spi-ders",
    comic: "Marvel"
  }, {
    name: "Batman",
    phoneNumber: "800-jus-tice",
    comic: "DC"
  }, {
    name: "Iron Man",
    phoneNumber: "123-456-7890",
    comic: "Marvel"
  }
]

angular
  .module("superheroesApp", [])
  .controller("SuperheroesCtrl", [
    superheroesController
  ])


  function superheroesController() {
    this.heroes = heroesData
    console.log(this.heroes);
  }
