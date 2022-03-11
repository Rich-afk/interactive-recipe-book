function fetchAndDisplayDrinkForId(id) {
    var recipeLink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

    fetch(recipeLink)
        .then(function (response) {
            var data = response.json();
            return data;

        })
        .then(function (data) {
            var drink = data.drinks[0]
            console.log(drink)

            var alcoholic = drink.strAlcoholic
            var glass = drink.strGlass
            var instructions = drink.strInstructions
            var thumb = drink.strDrinkThumb
            var drinkName = drink.strDrink

            var instructionContainer = document.querySelector('#instructioncontainer')
            var drinkNameEl = document.createElement('h2')
            drinkNameEl.textContent = drinkName
            var alcoholicEl = document.createElement('p')
            alcoholicEl.textContent = alcoholic;

            var glassEl = document.createElement('p')
            glassEl.textContent = glass
            var instructionEl = document.createElement('p')
            instructionEl.textContent = instructions
            var thumbEl = document.createElement('img')
            thumbEl.src = thumb;

            instructionContainer.appendChild(drinkNameEl)
            instructionContainer.appendChild(thumbEl)
            instructionContainer.appendChild(alcoholicEl)
            instructionContainer.appendChild(glassEl)
            instructionContainer.appendChild(instructionEl)

            for (let i = 1; i <= 15; i++) {

                if (drink[`strIngredient${i}`] === null) {
                    break

                }
                var ingredient = drink[`strIngredient${i}`]
                var measurement = drink[`strMeasure${i}`]

                var ingredientEl = document.createElement('p')
                ingredientEl.textContent = ingredient
                var measurementEl = document.createElement('p')
                measurementEl.textContent = measurement

                instructionContainer.appendChild(ingredientEl)
                instructionContainer.appendChild(measurementEl)
            }
        })
        .catch(function (err) {
            // console.log(err);
        });
}

var queryString = window.location.search
var urlParams = new URLSearchParams(queryString)
var id = urlParams.get('id')




fetchAndDisplayDrinkForId(id)