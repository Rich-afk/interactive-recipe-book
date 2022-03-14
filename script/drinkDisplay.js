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
            instructionContainer.classList.add('card', )
            var drinkNameEl = document.createElement('h2')
            drinkNameEl.textContent = drinkName
            drinkNameEl.classList.add('card-header-title', 'is-centered', 'my-5', 'has-background-primary', 'backgroundwidth')
            var alcoholicEl = document.createElement('p')
            alcoholicEl.textContent = 'This drink is: ' + alcoholic;
            alcoholicEl.classList.add('is-size-3', 'has-text-left', 'my-5')

            var glassEl = document.createElement('p')
            glassEl.textContent = 'Glass Required is: ' + glass
            glassEl.classList.add('is-size-3', 'has-text-left', 'my-5')

            var instructionEl = document.createElement('p')
            instructionEl.textContent = 'Instructions: ' + instructions
            instructionEl.classList.add('is-size-3', 'has-text-left', 'my-5')
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
                ingredientEl.classList.add('is-size-3', 'has-text-left')
                var measurementEl = document.createElement('p')
                measurementEl.textContent = measurement
                measurementEl.classList.add('is-size-3', 'has-text-left', 'mb-5', 'has-text-primary')

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