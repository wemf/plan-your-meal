fetch('https://wemf.github.io/plan-your-meal/data/food.json')
  .then(response => response.json())
  .then(data => {

      const recipe = document.getElementById('category-recipe');

      data.categories.forEach(category => {
        let option = document.createElement('option');

        option.setAttribute("value", category.title);
        option.textContent = category.title;
    
        recipe.appendChild(option);

      });

  })