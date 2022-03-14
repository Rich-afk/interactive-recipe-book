var spoonacularAPIKey = '2a35f712d5844467ad80be6414daaa93';


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
            recipeNameEl.classList.add('card-header-title', 'is-centered', 'my-5', 'has-background-primary', 'backgroundwidth')
            instructionContainer.appendChild(recipeNameEl);

            var thumb = data.image;
            var thumbEl = document.createElement('img');
            thumbEl.src = thumb;
            instructionContainer.appendChild(thumbEl);

            var ingredientsEl = document.createElement('p');
            for (var i = 0; i < data.extendedIngredients.length; i++) {
                var ingredient = data.extendedIngredients[i].original;
                var ingredientEl = document.createElement('p');
                ingredientEl.textContent = ingredient;
                ingredientEl.classList.add('is-size-3', 'has-text-left', 'has-background-primary')
                ingredientsEl.appendChild(ingredientEl);
            }
            instructionContainer.appendChild(ingredientsEl);

            var instructions = data.instructions;
            var instructionEl = document.createElement('p');
            instructionEl.innerHTML = 'Instructions: ' + instructions;
            instructionEl.classList.add('is-size-3', 'has-text-left', 'my-5', 'has-background-primary')
            instructionContainer.appendChild(instructionEl);

            if(data.winePairing != {}) {
                var winePair = data.winePairing.pairingText;
                console.log(data.winePairing.pairingText);
                var winePairEl = document.createElement('p');
                winePairEl.textContent = winePair;
                winePairEl.classList.add('is-size-3', 'has-text-left', 'my-5', 'has-background-primary')
                instructionContainer.appendChild(winePairEl);
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