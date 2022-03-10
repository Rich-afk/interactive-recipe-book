var ingredientInput = document.querySelector('#ingredients')
var recipeContainerEl = document.querySelector('#recipe-container')


function fetchCocktails(name) {
    var cocktailAPI = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'

    fetch(cocktailAPI)
        .then(function (response) {
            var data = response.json();
            return data;

        })
        .then(function (data) {
            displayRecipes(data);
            for (let i = 0; i < 10; i++) {
                var recipeName = data.drinks.strDrink[i];
                console.log(recipeName)

            }
        })
        .catch(function (err) {
            // console.log(err);
        });
}
fetchCocktails();

var displayRecipes = function (data) {
    console.log(data)
    if (data.drinks.strDrink[i] === 0) {
        recipeContainerEl.textContent = 'No recipes found.';
        return;
    }

    // ingredientInput.textContent = searchTerm;

    for (var i = 0; i < 10; i++) {
        var recipeName = data.drinks.strDrink[i];

        var recipeEl = document.createElement('div');
        recipeEl.classList

        var titleEl = document.createElement('span');
        titleEl.textContent = recipeName;

        recipeEl.appendChild(titleEl);

        var pictureEl = document.createElement('img');
        pictureEl.src = data.drinks.strDrinkThumb;

        recipeEl.appendChild(pictureEl);

        recipeContainerEl.appendChild(recipeEl);
    }
    console.log(data.drinks.strDrink[i])
};
