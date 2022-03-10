
function fetchCocktails(name) {
    var cocktailAPI = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'
   
    fetch(cocktailAPI)
    .then(function (response) {
      var data = response.json();
      return data;
  
    })
    .then(function (data) {
      for (let i = 0; i < 10; i++) {
      
        console.log(data.drinks[i])
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  }
  fetchCocktails();