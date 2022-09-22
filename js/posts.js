const url = 'https://www.course-assignment.store/wp-json/wp/v2/posts?_embed';
const gridContainer = document.querySelector('.grid-container');
const searchBar = document.getElementById('search');

let posts = [];

searchBar.addEventListener('keyup', (e) => {
	const searchTarget = e.target.value;

	const filteredPost = posts.filter((post) => {
		const name = post.title.rendered;
		return name.includes(searchTarget);
	});

	createAllPostsHTML(filteredPost);
});

// Get data from api

const getAllPosts = async () => {
	try {
		const response = await fetch(url);
		posts = await response.json();

		createAllPostsHTML(posts);
	} catch (error) {
		`
			<div></div>
			<h5>We are sorry. There was a problem loading your content. ${error}</h5>
		`;
	}
};

getAllPosts();

//Create HTML on all posts page

const createAllPostsHTML = (posts) => {
	const htmlString = posts
		.map((post) => {
			return `
				<h1>${post.title.rendered}</h1>
			`;
		})
		.join('');

	gridContainer.innerHTML = htmlString;
};

// const createAllPostsHTML = (posts) => {
// 	console.log(posts);

// 	posts.forEach((post) => {
// 		gridContainer.innerHTML += `
// 			<a class='card flex_col card-container' href='./article.html?id=${post.id}'>
// 				<div class='image-container'>
// 				<img class='card-img' src='${post._embedded['wp:featuredmedia']['0'].source_url}'/>
// 				</div>

// 			<div class='text-container flex_col'>
// 				<p class='post-header'>${post.title.rendered}</p>
// 			</div>

// 			</a>
//         `;
// 	});
// };

//Search through all posts
