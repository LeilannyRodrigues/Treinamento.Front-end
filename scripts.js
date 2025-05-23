// GET

/* fetch("https://jsonplaceholder.typicode.com/posts") 
    .then((response) => response.json())
    .then((posts) => {
        console.log(posts);
    const container = document.querySelector("#container")
    posts.map(post => {
        console.log(post.title)
        const h2 = document.createElement("h2")
        h2.textContent = post.title
        container.appendChild(h2)
    })
 }) */

    //Post

   /*  fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json)); */

       /* fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json)); */

           /* fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PATCH',
                body: JSON.stringify({
                  title: 'foo',
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json)); */

                // DELETE

                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'DELETE',
                  });
