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
	
	title.innerHTML = `Golf buddies | ${post.title.rendered}`;

	document.querySelector('.lds-ring').style.display = 'none';

	articleContainer.innerHTML += `
	
		<div class='header-container'>
			<img src='${post._embedded['wp:featuredmedia']['0'].source_url}' alt=${post.title.rendered} class='image-header'/>
			<div class='modal'>
				<img src='${post._embedded['wp:featuredmedia']['0'].source_url}' alt=${post.title.rendered} class='image-open-modal'/>
				<span class="modal-close">&times;</span>
				</div>
			</div>
			<div class='header-text-container'>
				<p class='post-title'>${post.title.rendered}</p>
				${post.excerpt.rendered}
			</div>
		</div>
		<div class='content'>
		<div class='author-container flex'>
		<img src='${post._embedded['author']['0'].avatar_urls['24']}' class='author-image' alt='Image of the follwing author: ${post._embedded['author']['0'].name}'/>
		<p class='name'>${post._embedded['author']['0'].name}</p>
		<p>5 min read</p>
		</div>
				<p>${post.content.rendered}</p>
		</div>

`;

	const img = document.querySelector('.image-header');
	const modal = document.querySelector('.modal');
	const close = document.querySelector('.modal-close');

	img.addEventListener('click', () => {
		modal.style.display = 'block';
	});

	close.addEventListener('click', () => {
		modal.style.display = 'none';
	});

	// 	articleContainer.innerHTML += `

	// 	<div class='card flex_col card-container' href='./article.html?id=${post.id}'>
	// 	<img src='${post._embedded['wp:featuredmedia']['0'].source_url}' alt='${post.title.rendered}' class='featured-image'/>
	// 	<div class='text-container flex_col'>
	// 	<p class='post-title'>${post.title.rendered}</p>
	// 	${post.excerpt.rendered}
	// 	<div class='author-text-container flex'>
	// 		<img src='${post._embedded['author']['0'].avatar_urls['24']}' class='author-image'/>
	// 		<div class='flex_col'>
	// 			<p class='author'>${post._embedded['author']['0'].name}</p>
	// 			<p class='time'>${post.date}</p>
	// 		</div>
	// 	</div>
	// 	</div>
	// </div>

	//     `;
};
