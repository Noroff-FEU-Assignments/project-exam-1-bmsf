const url = 'https://www.course-assignment.store/wp-json/wp/v2/posts?_embed';
const slider = document.querySelector('.slider');

const getPosts = async () => {
	try {
		const response = await fetch(url);
		const results = await response.json();
		createSliderHTML(results);
	} catch (error) {}
};

getPosts();

const createSliderHTML = (posts) => {
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

// Image scroll
// const parralax = document.querySelector('.intro');
// window.addEventListener('scroll', function () {
// 	let offset = window.scrollY;

// 	parralax.style.backgroundPositionY = offset * 1 + 'px';
// });

//Trending carousel scroll

document.addEventListener('click', (e) => {
	let handle;

	if (e.target.matches('handle')) {
		handle = e.target;
	} else {
		handle = e.target.closest('.handle');
	}
	if (handle != null) onHandleClick(handle);
});

function onHandleClick(handle) {
	const slider = handle.closest('.carousel-container').querySelector('.slider');
	const sliderIndex = parseInt(
		getComputedStyle(slider).getPropertyValue('--slider-index')
	);
	if (handle.classList.contains('left-handle') && sliderIndex > 0) {
		slider.style.setProperty('--slider-index', sliderIndex - 1);
	}

	if (handle.classList.contains('right-handle') && sliderIndex < 3) {
		slider.style.setProperty('--slider-index', sliderIndex + 1);
	}
}
