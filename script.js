var spoonacularAPIKey = 'cc4c59b381934298b2f27908bf302eb4';

searchEl = document.getElementsByClassName('search');


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
  var spoonacularURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}apiKey=${spoonacularAPIKey}`
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

function getRecipeInfo(recipeInfo) {
  var recipeInfo = `https://api.spoonacular.com/recipes/716429/information?apiKey=${spoonacularAPIKey}`
  fetch(recipeInfo)
  .then(function(repsonse){
    var data = repsonse.json();
    return data;
  })
  .then(function(data){

    console.log(data)

    for (let i = 0; i < 10; i++) {
      console.log(data.extendedIngredients[i].name)
      // const element = data.extendedIngredients[i].name;
    }
  })
  .catch(function(err){
    console.log(err);
  })
}
getRecipeInfo();