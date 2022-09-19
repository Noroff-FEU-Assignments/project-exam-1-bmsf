const url = 'https://www.course-assignment.store/wp-json/wp/v2/posts?_embed';
const gridContainer = document.querySelector('.grid-container');
const getAllPosts = async () => {
	try {
		const response = await fetch(url);
		const results = await response.json();
		console.log(results);
		createAllPostsHTML(results);
	} catch (error) {}
};

getAllPosts();

const createAllPostsHTML = (posts) => {
	console.log(posts);
	posts.forEach((post) => {
		gridContainer.innerHTML += `
		
        <a class='card flex_col card-container' href='./article.html?id=${post.id}'>
			<img class='card-img' src='${post._embedded['wp:featuredmedia']['0'].source_url}'/>
			<div class='text-container flex_col'>
				<p class='post-header'>${post.title.rendered}</p>
			</div>
			
        </a>
        `;
	});
};
