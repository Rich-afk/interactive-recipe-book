var spoonacularAPIKey = 'cc4c59b381934298b2f27908bf302eb4';

//from the search button
searchEl = document.querySelector('#ingredients');
modalEl = document.querySelector('#modal');

var ingredientList = '';

function fetchCocktails(name) {
  var cocktailAPI = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'

  fetch(cocktailAPI)
    .then(function (response) {
      var data = response.json();
      return data;

    })
    .then(function (data) {
      for (let i = 0; i < 10; i++) {

        console.log(data.drinks[i])
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

var formSubmitHandler = function (event) {
  event.preventDefault();

  var ingredient = searchEl.value.trim();

  if (username) {
    getIngredientRepos(username);

    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a valid ingredient');
  }
};

var getIngredientRepos = function (input) {
  var apiUrl = `https://api.spoonacular.com/food/ingredients/search?query=${input}apiKey=${spoonacularAPIKey}`;

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        if (ingredientList = '') {
          ingredientList += input;
        }
        else {
          //add ingredient to list
          ingredientList += ",+" + input;
        }
      }
      else {
        //swap out for a modal

        var modalBG = document.createElement('div');
        modalBG.classList.add('modal-background');

        var modalContent = document.createElement('div');
        var modalText = 'Error: Invalid Ingredient'
        modalContent.appendChild(modalText);
        modalContent.classList.add('modal-content');

        var button = document.createElement('button');
        button.classList.add('modal-close is-large');

        modalEl.appendChild(modalBG);
        modalEl.appendChild(modalContent);
        modalEl.appendChild(button);


      }
    })
    .catch(function (error) {
      alert('Unable to connect to database');
    });
};

//switched api key to findByIngredients
//im planning on taking a list of ingredients from the button i initialized and putting it into ingredientList
function fetchSpoonByIngredients(spoonacularURL) {
  var spoonacularURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}apiKey=${spoonacularAPIKey}`
  fetch(spoonacularURL)
    .then(function (response) {
      var data = response.json();
      return data;
    })
    .then(function (data) {
      //output possible ingredients
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    })
}

function getRecipeInfo(recipeInfo) {
  var recipeInfo = `https://api.spoonacular.com/recipes/716429/information?apiKey=${spoonacularAPIKey}`
  fetch(recipeInfo)
    .then(function (repsonse) {
      var data = repsonse.json();
      return data;
    })
    .then(function (data) {

      console.log(data)

      for (let i = 0; i < 10; i++) {
        console.log(data.extendedIngredients[i].name)
        // const element = data.extendedIngredients[i].name;
      }
    })
    .catch(function (err) {
      console.log(err);
    })
}

getRecipeInfo();



