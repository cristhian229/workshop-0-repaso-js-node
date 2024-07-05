document.getElementById('fetch-posts').addEventListener('click', () => {
  fetchPosts();
});

const fetchPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(posts => {
          displayPosts(posts);
      })
      .catch(error => {
          displayError(error);
      });
};

const displayPosts = (posts) => {
  const postList = document.getElementById('post-list');
  posts.forEach(post => {
  postList.innerHTML += `<li>Title: ${post.title} <br>Body: ${post.body}</li>`
  });
};

const displayError = (error) => {
  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = `Error: ${error.message}`;
};