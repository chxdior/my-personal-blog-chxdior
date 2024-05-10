document.getElementById('blog-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Retrieve existing posts from localStorage or initialize an empty array
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (username && title && content) {
        const postData = {
            username: username,
            title: title,
            content: content
        };
        // Push new post data into the posts array
        posts.push(postData);
        // Update localStorage with the updated posts array
        localStorage.setItem('posts', JSON.stringify(posts));
        window.location.href = 'blog.html'; // Redirect to the blog page
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
