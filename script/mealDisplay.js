var spoonacularAPIKey = 'e23d847037004d56939e5a25002e5edd';


function fetchAndDisplayDrinkForId(id) {
    var recipeLink = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${spoonacularAPIKey}`

    fetch(recipeLink)
        .then(function (response) {
            var data = response.json();
            return data;

        })
        .then(function (data) {
            console.log(data)
            

            var instructionContainer = document.querySelector('#instructioncontainer')

            var recipeName = data.title;
            var recipeNameEl = document.createElement('h2');
            recipeNameEl.textContent = recipeName;
            instructionContainer.appendChild(recipeNameEl);

            var thumb = data.image;
            var thumbEl = document.createElement('img');
            thumbEl.src = thumb;
            instructionContainer.appendChild(thumbEl);

            var ingredientsEl = document.createElement('p')
            for (var i = 0; i < data.extendedIngredients.length; i++) {
                var ingredient = data.extendedIngredients[i].original;
                var ingredientEl = document.createElement('p');
                ingredientEl.textContent = ingredient;
                ingredientsEl.appendChild(ingredientEl);
            }
            instructionContainer.appendChild(ingredientsEl);

            var instructions = data.instructions;
            var instructionEl = document.createElement('p');
            instructionEl.innerHTML = instructions;
            instructionContainer.appendChild(instructionEl);

        })
        .catch(function (err) {
            // console.log(err);
        });
}

var queryString = window.location.search
var urlParams = new URLSearchParams(queryString)
var id = urlParams.get('id')


fetchAndDisplayDrinkForId(id)