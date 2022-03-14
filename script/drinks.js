var ingredientInput = document.querySelector('#ingredients')
var recipeContainerEl = document.querySelector('#recipe-container')
var searchBtn = document.querySelector('#searchbtn')
var inputfield = document.querySelector('#ingredients')



function fetchCocktails(name) {
    var cocktailAPI = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`

    fetch(cocktailAPI)
        .then(function (response) {
            var data = response.json();
            return data;

        })
        .then(function (data) {
            console.log(data)
            displayDrinkRecipes(data.drinks);

        })
        .catch(function (err) {
            // console.log(err);
        });
}


var displayDrinkRecipes = function (drinksArray) {
    // if (drinksArray.drinks.strDrink[i] === 0) {
    //     recipeContainerEl.textContent = 'No recipes found.';
    //     return;
    // }
    var recipeLink = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
    // ingredientInput.textContent = searchTerm;

    for (var i = 0; i < 10; i++) {
        // console.log(drinksArray[i])
        var drink = drinksArray[i]
        var drinkName = drink.strDrink;
        console.log(drink)

        var drinkEl = document.createElement('div');
        // recipeEl.classList

        var titleEl = document.createElement('span');
        titleEl.textContent = drinkName;

        drinkEl.appendChild(titleEl);

        var linkEl = document.createElement('a');
        linkEl.setAttribute("href", `drinkDisplay.html?id=${drink.idDrink}`);

        var pictureEl = document.createElement('img');
        pictureEl.src = drink.strDrinkThumb;

        linkEl.appendChild(pictureEl);

        drinkEl.appendChild(linkEl);
        // drinkEl.appendChild(linkEl);


        recipeContainerEl.appendChild(drinkEl);
    }
};
searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    fetchCocktails(inputfield.value);
})

