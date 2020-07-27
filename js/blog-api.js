fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
      const blog = document.getElementById('blog');

      // loop to get 3 posts only
      for (let i = 0; i < 3; i++){
        let article = document.createElement('article');
        let picture = document.createElement('picture');
        let img = document.createElement('img');
        let body = document.createElement('section');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');;

        img.setAttribute("src", `images/${i+1}.jpg`);
        img.setAttribute("alt", `image ${posts[i].title}`);
        h3.textContent = posts[i].title;
        p.textContent = posts[i].body;
        body.setAttribute("class", "post-content");

        body.appendChild(h3);
        body.appendChild(p);
        picture.appendChild(img);
        article.appendChild(picture);
        article.appendChild(body);
        blog.appendChild(article);

      }
  })