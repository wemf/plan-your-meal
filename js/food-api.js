fetch('../data/food.json')
  .then(response => response.json())
  .then(data => {

      const categories = document.getElementById('food-categories');

      // populate categories
      data.categories.forEach(category => {
        let container = document.createElement('div');
        let picture = document.createElement('picture');
        let img = document.createElement('img');
        let content = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let link = document.createElement('a');

        container.setAttribute("class", "food-card");
        img.setAttribute("src", category.image);
        img.setAttribute("alt", category.title);
        content.setAttribute("class", "food-card-content");
        h3.textContent = category.title;
        p.textContent = category.description;
        link.setAttribute("href", `/add-recipes.html?category=${category.title}`);
        link.setAttribute("class", "btn btn-primary");
        link.textContent = "Add recipes";
        
        picture.appendChild(img);
        container.appendChild(picture);
        content.appendChild(h3);
        content.appendChild(p);
        content.appendChild(link);
        container.appendChild(content);

        categories.appendChild(container);

      });

      //populate recipes
      const recipe = document.getElementById("recipe");
      let tbody = document.createElement('tbody');
      // sample recipe
      const arepa = data.recipes[0];

      for (let i = 0; i<4; i++){
        let tr = document.createElement('tr');
        let td0 = document.createElement('td');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        
        td0.textContent = i+1;
        td1.textContent = arepa.ingredients[i];
        td2.textContent = arepa.directions[i];
        td2.setAttribute("colspan", 2);
        
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
      }

      recipe.appendChild(tbody);
  })