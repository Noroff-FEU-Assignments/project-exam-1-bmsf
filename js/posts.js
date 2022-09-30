let offset = 0;
let perPage = 10;
let url = `https://www.course-assignment.store/wp-json/wp/v2/posts?_embed&?per_page=10&offset=0`;

console.log(url);

const gridContainer = document.querySelector('.grid-container');
const searchBar = document.getElementById('search');
const showMore = document.querySelector('.show-more');
const cardCount = document.querySelector('.card-count');
const cardTotal = document.querySelector('.card-total');

//Search bar

searchBar.addEventListener('keyup', (e) => {
	const searchTarget = e.target.value.toLowerCase();

	const filteredPost = posts.filter((post) => {
		const name = post.title.rendered;
		return name.toLowerCase().includes(searchTarget);
	});

	createAllPostsHTML(filteredPost);
});

// Get data from api

const getAllPosts = async () => {
	try {
		const response = await fetch(url);
		posts = await response.json();

		createAllPostsHTML(posts);

		console.log(url);
	} catch (error) {
		`
			<div></div>
			<h5>We are sorry. There was a problem loading your content. ${error}</h5>
		`;
	}
};

const loadMore = () => {
	perPage += 10;
	// offset += 10;
	url = `https://www.course-assignment.store/wp-json/wp/v2/posts?_embed&per_page=${perPage}&offset=${offset}`;
	getAllPosts();
};

showMore.addEventListener('click', loadMore);

//Create HTML on all posts page

const createAllPostsHTML = (posts) => {
	const htmlString = posts
		.map((post) => {
			return `
			<a class='card flex_col card-container' href='./article.html?id=${post.id}'>
				<img src='${post._embedded['wp:featuredmedia']['0'].source_url}' alt='${post.title.rendered}' class='featured-image'/>
				<div class='text-container flex_col'>
				<p class='post-title'>${post.title.rendered}</p>
				${post.excerpt.rendered}
				<div class='author-text-container flex'>
				</div>
				</div>
			</a>	
			`;
		})
		.join('');

		// 
		// <img src='${post._embedded['author']['0'].avatar_urls['24']}' class='author-image'/>
		// 			<div class='flex_col'>
		// 				<p class='author'>${post._embedded['author']['0'].name}</p>
		// 				<p class='time'>${post.date}</p>
		// 			</div>

	// <p class='category'>${post._embedded['wp:term']['0']['0'].name}</p>

	gridContainer.innerHTML = htmlString;
};

//Show more button

getAllPosts();
