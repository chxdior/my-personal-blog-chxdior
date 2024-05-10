
document.addEventListener('DOMContentLoaded', function () {
    const posts = JSON.parse(localStorage.getItem('posts'));
    if (posts) {
        console.log(posts[0])
        var blogPosts = document.getElementById('submitted-post');
       posts.forEach(element => {
       
            console.log(blogPosts)
            var postElement = document.createElement('div');
            postElement.innerHTML = `
        
        
            <h2>${element.title}</h2>
            <p>${element.content}</p>
            <p class = 'author'>Author: ${element.username}</p>
        `;

            blogPosts.appendChild(postElement);
        });

    }
});

