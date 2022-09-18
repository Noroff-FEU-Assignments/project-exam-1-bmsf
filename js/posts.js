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

const createAllPostsHTML =  (posts) => {
 console.log(posts);
	gridContainer.innerHTML = `<h1>Hei</h1>`;
};

createAllPostsHTML();
