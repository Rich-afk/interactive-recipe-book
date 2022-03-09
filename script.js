var spoonacularAPIKey = 'cc4c59b381934298b2f27908bf302eb4';
var cocktailAPI = 'www.thecocktaildb.com/api/json/v1/1/random.php'

function fetchAPI(cocktailAPI) {
    fetch(cocktailAPI)
      .then(function (response) {
        let data = response.json();
        return data;
      })
      .then(function (data) {
        console.log(data)
      })
      .catch(function (err) {
        console.log(err);
      });
    }