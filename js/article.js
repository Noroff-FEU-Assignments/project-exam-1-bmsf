const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const articleContainer = document.querySelector('.article-container');

const urlID = `https://www.course-assignment.store/wp-json/wp/v2/posts/${id}?_embed`;

// console.log(queryString);
// console.log(params);
// console.log(id);
// console.log(url);

const getPostDetails = async () => {
	try {
		const response = await fetch(urlID);
		const post = await response.json();
		createPost(post);
	} catch (error) {}
};

getPostDetails();

const createPost = (post) => {
	console.log(post);
	// console.log(post._embedded['wp:featuredmedia']['0'].source_url);
	if (post.author === 1) {
		post.author = 'Admin';
	}
	articleContainer.innerHTML += `
        <div class='article-container'>
            <div>
                <h1>${post.title.rendered}</h1>
                <p>By: ${post.author}</p>
                <p>${post.date}</p>
            </div>
            <img src='${post._embedded['wp:featuredmedia']['0'].source_url}' class='featured-image'/>
            <p>${post.content.rendered}</p>
        </div>
    `;
};

createPost();
