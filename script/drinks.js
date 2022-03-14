var ingredientInput = document.querySelector('#ingredients')
var recipeContainerEl = document.querySelector('#recipe-container')
var searchBtn = document.querySelector('#searchbtn')
var inputfield = document.querySelector('#ingredients')
var searchSavedButtonEl = document.querySelector('#searchsavedbutton')


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
            if (err) {
                recipeContainerEl.textContent = 'No recipes found.';
                recipeContainerEl.classList.add('has-text-centered', 'title', 'is-1')
                return;
            }
            console.log(err);
        });
}


var displayDrinkRecipes = function (drinksArray) {
    console.log(drinksArray)


    recipeContainerEl.textContent = ''
    for (var i = 0; i < 10; i++) {

        var drink = drinksArray[i]
        var drinkName = drink.strDrink;
        console.log(drink)

        var drinkEl = document.createElement('div');
        drinkEl.classList.add('title', 'is-1', 'has-text-centered', 'is-size-2', 'my-5', 'py-5');

        var titleEl = document.createElement('span');
        titleEl.textContent = drinkName;
        titleEl.classList.add('block', 'card-header-title', 'is-centered', 'has-background-primary',)

        drinkEl.appendChild(titleEl);

        var linkEl = document.createElement('a');
        linkEl.setAttribute("href", `drinkDisplay.html?id=${drink.idDrink}`);

        var pictureEl = document.createElement('img');
        pictureEl.src = drink.strDrinkThumb;

        linkEl.appendChild(pictureEl);

        drinkEl.appendChild(linkEl);

        recipeContainerEl.appendChild(drinkEl);
    }
};
function saveingredient(searchinput) {
    var previousSearches = JSON.parse(localStorage.getItem("saved-searches")) || [];
    previousSearches.push(searchinput)
    localStorage.setItem("saved-searches", JSON.stringify(previousSearches));
}

function displaypreviousSearches() {
    var previousSearches = JSON.parse(localStorage.getItem("saved-searches")) || [];
    previousSearches = new Set(previousSearches);
    console.log(previousSearches)
    previousSearches.forEach(element => {

        var savedSearchButton = document.createElement('button')
        savedSearchButton.classList.add('button', 'is-primary', 'column', 'is-large', 'my-2', 'has-text-centered', 'has-text-justified', 'is-fullwidth')
        savedSearchButton.textContent = element
        savedSearchButton.addEventListener('click', function (event) {
            event.preventDefault();
            fetchCocktails(event.target.innerText)
        })
        searchSavedButtonEl.appendChild(savedSearchButton)
    });


}
displaypreviousSearches();

searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    fetchCocktails(inputfield.value);
    saveingredient(inputfield.value);
    inputfield.value = '';
})

