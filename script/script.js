//ce208fd853244c5b802878ab6b1c4d0d
//e23d847037004d56939e5a25002e5edd
var spoonacularAPIKey = '2a35f712d5844467ad80be6414daaa93';

//from the search button
searchBtn = document.querySelector('#searchbtn');
modalEl = document.querySelector('#modal');
recipeContainerEl = document.querySelector('#recipe-container');
inputEl = document.querySelector('#ingredients');
searchSavedButtonEl = document.querySelector('#searchsavedbutton')


function getIngredientRepos(name) {
  var apiUrl = `https://api.spoonacular.com/food/ingredients/search?query=${name}&apiKey=${spoonacularAPIKey}`;

  fetch(apiUrl)
    .then(function (response) {
        var data = response.json();
        return data;

    })
    .then(function (data) {
      //console.log(data)
      fetchSpoonByIngredients(name);

    })
    .catch(function (error) {
      if (err) {
        recipeContainerEl.textContent = 'No recipes found.';
        recipeContainerEl.classList.add('has-text-centered', 'title', 'is-1')
        return;
    }
    console.log(err);
    });
};


function fetchSpoonByIngredients(ingredient) {
  //console.log(ingredient)
  var spoonacularURL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${spoonacularAPIKey}`
  fetch(spoonacularURL)
    .then(function (response) {
      var data = response.json();
      return data;
    })
    .then(function (data) {
      //output possible recipies
      //console.log(data);
      for (var i = 0; i < 10; i++) {

        var recipe = data[i];

        var recipeEl = document.createElement('div');
        recipeEl.classList.add('title', 'is-1', 'has-text-centered', 'is-size-2', 'my-5', 'py-5');

        var titleEl = document.createElement('span');
        // console.log(recipe.title)
        titleEl.textContent = recipe.title;
        titleEl.classList.add('block', 'card-header-title', 'is-centered', 'has-background-primary',)
        recipeEl.appendChild(titleEl);

        var linkEl = document.createElement('a');
        linkEl.setAttribute("href", `mealsDisplay.html?id=${recipe.id}`);

        var pictureEl = document.createElement('img');
        pictureEl.src = recipe.image;

        linkEl.appendChild(pictureEl);

        recipeEl.appendChild(linkEl);
        // recipeEl.appendChild(linkEl);


        recipeContainerEl.appendChild(recipeEl);
      }

      //console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    })
}


function saveIngredient(searchinput) {
  var previousSearches = JSON.parse(localStorage.getItem("saved-ingredients")) || [];
  previousSearches.push(searchinput);
  localStorage.setItem("saved-ingredients", JSON.stringify(previousSearches));
}

function displaypreviousSearches() {
  var previousSearches = JSON.parse(localStorage.getItem("saved-ingredients")) || [];
  previousSearchesSet = new Set(previousSearches);
  //console.log(previousSearchesSet)
  previousSearchesSet.forEach(element => {

      var savedSearchButton = document.createElement('button')
      savedSearchButton.classList.add('button', 'is-primary', 'column', 'is-large', 'my-2', 'has-text-centered', 'has-text-justified', 'is-fullwidth')
      savedSearchButton.textContent = element;
      savedSearchButton.addEventListener('click', function (event) {
          event.preventDefault();
          fetchSpoonByIngredients(event.target.innerText);
      })
      searchSavedButtonEl.appendChild(savedSearchButton)
  });


}
displaypreviousSearches();

searchBtn.addEventListener('click', function (event) {
  event.preventDefault();
  recipeContainerEl.innerHTML = '';
  // console.log(inputEl.value)
  //console.log(inputEl.value);
  getIngredientRepos(inputEl.value);
  saveIngredient(inputEl.value);
})