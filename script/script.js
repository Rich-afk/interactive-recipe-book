//ce208fd853244c5b802878ab6b1c4d0d
var spoonacularAPIKey = 'e23d847037004d56939e5a25002e5edd';

//from the search button
searchBtn = document.querySelector('#searchbtn');
modalEl = document.querySelector('#modal');
recipeContainerEl = document.querySelector('#recipe-container');
inputEl = document.querySelector('#ingredients');

var ingredientList = [];


function getIngredientRepos(name) {
  var apiUrl = `https://api.spoonacular.com/food/ingredients/search?query=${name}&apiKey=${spoonacularAPIKey}`;

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        ingredientList.push(name);
        console.log(ingredientList);
        var data = response.json();
        return data;
      }
      // else {
      //   //when the ingredient does not exist

      //   var modalBG = document.createElement('div');
      //   modalBG.classList.add('modal-background');

      //   var modalContent = document.createElement('div');
      //   var modalText = 'Error: Invalid Ingredient'
      //   modalContent.appendChild(modalText);
      //   modalContent.classList.add('modal-content');

      //   var button = document.createElement('button');
      //   button.classList.add('modal-close is-large');

      //   modalEl.appendChild(modalBG);
      //   modalEl.appendChild(modalContent);
      //   modalEl.appendChild(button);


      // }
    })
    .then(function (data) {
      console.log(data)
      fetchSpoonByIngredients(ingredientList);

  })
    .catch(function (error) {
      // console.log(err);
    });
};


function fetchSpoonByIngredients(ingredientList) {
  var ingredients = ingredientList.join(',+');
  console.log(ingredients)
  var spoonacularURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${spoonacularAPIKey}`
  fetch(spoonacularURL)
    .then(function (response) {
      var data = response.json();
      return data;
    })
    .then(function (data) {
      //output possible recipies
      console.log(data);
      for (var i = 0; i < 10; i++) {

        var recipe = data[i];

        var recipeEl = document.createElement('div');

        var titleEl = document.createElement('span');
        // console.log(recipe.title)
        titleEl.textContent = recipe.title;
        recipeEl.appendChild(titleEl);

        var linkEl = document.createElement('a');
        linkEl.setAttribute("href", `mealDisplay.html?id=${recipe.id}`);

        var pictureEl = document.createElement('img');
        pictureEl.src = recipe.image;

        linkEl.appendChild(pictureEl);

        recipeEl.appendChild(linkEl);
        // recipeEl.appendChild(linkEl);


        recipeContainerEl.appendChild(recipeEl);
      }

      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    })
}


searchBtn.addEventListener('click', function (event) {
  event.preventDefault();
  recipeContainerEl.innerHTML = '';
  // console.log(inputEl.value)
  //console.log(inputEl.value);
  getIngredientRepos(inputEl.value);
})

//fetchSpoonByIngredients(['cheese']);
//getRecipeInfo(716429);



