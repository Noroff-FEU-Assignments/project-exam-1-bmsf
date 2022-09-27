const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const articleContainer = document.querySelector('.article-container');
const title = document.querySelector('.title');

const urlID = `https://www.course-assignment.store/wp-json/wp/v2/posts/${id}?_embed`;

const getPostDetails = async () => {
	try {
		const response = await fetch(urlID);
		const post = await response.json();
		createPost(post);
	} catch (error) {
		`
			<div></div>
			<h5>We are sorry. There was a problem loading your content. ${error}</h5>

		`;
	}
};

getPostDetails();

const createPost = (post) => {
	console.log(post);
	title.innerHTML = `Golf buddies | ${post.title.rendered}`;
	// console.log(post._embedded['wp:featuredmedia']['0'].source_url);
	if (post.author === 1) {
		post.author = 'Admin';
	}
	document.querySelector('.lds-ring').style.display = 'none';
	articleContainer.innerHTML += `
        
            <div>
                <h1>${post.title.rendered}</h1>
                <p>By: ${post.author}</p>
                <p>${post.date}</p>
            </div>
            <img src='${post._embedded['wp:featuredmedia']['0'].source_url}' class='featured-image'/>
			<div class='content'>
				<p>${post.content.rendered}</p>
			</div>
            
        
    `;
};
