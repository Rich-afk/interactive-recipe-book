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
            var thumb = strDrinkThumb

            for (let i = 1; i <= 15; i++) {
                if (drink[`strIngredient${i}`] === null) {
                    break
                    
                }
                var ingredient = drink[`strIngredient${i}`]
                var measurement = drink[`strMeasure${i}`]
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