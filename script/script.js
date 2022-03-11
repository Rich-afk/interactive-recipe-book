var spoonacularAPIKey = 'cc4c59b381934298b2f27908bf302eb4';

//from the search button
searchEl = document.querySelector('#ingredients');
modalEl = document.querySelector('#modal');

var ingredientList = '';
var exList = 'cheese'

var formSubmitHandler = function (event) {
  console.log("im working")
  event.preventDefault();

  var ingredient = searchEl.value.trim();

  if (ingredient) {
    getIngredientRepos(ingredient);
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
      var modalBG = document.createElement('div');
        modalBG.classList.add('modal-background');

        var modalContent = document.createElement('div');
        var modalText = 'Unable to connect to database'
        modalContent.appendChild(modalText);
        modalContent.classList.add('modal-content');

        var button = document.createElement('button');
        button.classList.add('modal-close is-large');

        modalEl.appendChild(modalBG);
        modalEl.appendChild(modalContent);
        modalEl.appendChild(button);
    });
};

function fetchSpoonByIngredients(spoonacularURL) {
  var spoonacularURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}apiKey=${spoonacularAPIKey}`
  var exampleIngredients = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}apiKey=${spoonacularAPIKey}`
  fetch(spoonacularURL)
    .then(function (response) {
      var data = response.json();
      return data;
    })
    .then(function (data) {
      //output possible recipies

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



