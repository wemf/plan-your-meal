fetch('../data/food.json')
  .then(response => response.json())
  .then(data => {

      const categories = document.getElementById('food-categories');
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
        link.setAttribute("href", `/add-recipies.html?category=${category.title}`);
        link.setAttribute("class", "btn btn-primary");
        link.textContent = "Add recipies";
        
        picture.appendChild(img);
        container.appendChild(picture);
        content.appendChild(h3);
        content.appendChild(p);
        content.appendChild(link);
        container.appendChild(content);

        categories.appendChild(container);

      });
  })