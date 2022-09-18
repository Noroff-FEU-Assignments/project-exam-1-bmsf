const url = 'https://www.course-assignment.store/wp-json/wp/v2/posts?_embed';

export const getPosts = () => {
	const data = async () => {
		try {
			const response = await fetch(url);
			const results = await response.json();
			createHTML(results);
		} catch (err) {}
	};

	data();

	const createHTML = (posts) => {
		posts.forEach((post) => {
			if (post.author === 1) {
				post.author = 'Admin';
			}
			slider.innerHTML += `
		<a class='card flex_col' href='./article.html?id=${post.id}'>
			<p class='post-header'>${post.title.rendered}</p>
			<div class='author-container flex'>
				<img src='./resources/images/meg.jpeg' class='author-image'/>
				<div class='author-text-container'>
					<p class='author'>${post.author}</p>
					<p class='time'>${post.date}</p>
				</div>
			</div>
		</a>
	`;
		});
	};
};
