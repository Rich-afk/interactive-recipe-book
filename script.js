var spoonacularAPIKey = 'cc4c59b381934298b2f27908bf302eb4';

function fetchAPI(cocktailAPI) {
  var cocktailAPI = 'www.thecocktaildb.com/api/json/v1/1/random.php'
  fetch(cocktailAPI)
  .then(function (response) {
    let data = response.json();
    return data;
  })
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    console.log(err);
  });
}

function fetchSpoonByIngredients(spoonacularURL) {
  var spoonacularURL = 'https://api.spoonacular.com/recipes/findByIngredients'
  fetch(spoonacularURL)
    .then(function (response) {
      var data = response.json();
      return data;
    })
    .then(function (data) {
      console.log(data)
    })
    .catch(function (err) {
      console.log(err);
    })
}