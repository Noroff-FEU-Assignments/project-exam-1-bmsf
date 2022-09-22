const url = 'https://www.course-assignment.store/wp-json/wp/v2/posts?_embed';

const getPosts = async () => {
	try {
		const response = await fetch(url);
		const results = await response.json();
		createSliderHTML(results);
		// createScrollForMobile();
	} catch (error) {
		slider.innerHTML = `
			<div></div>
			<h5>We are sorry. There was a problem loading your content. ${error}</h5>
		`;
		console.log(error);
	}
};

getPosts();

const createSliderHTML = (posts) => {
	posts.forEach((post) => {
		if (post.author === 1) {
			post.author = 'Admin';
		}
		document.querySelector('.lds-ring').style.display = 'none';
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

// Header image scroll effect

const parralax = document.querySelector('.intro');
window.addEventListener('scroll', function () {
	let offset = window.scrollY;

	parralax.style.backgroundPositionY = offset * 1 + 'px';
});

//Trending carousel scroll

const slider = document.querySelector('.slider');

// const createScrollForMobile = () => {
// 	let slides = Array.from(document.querySelectorAll('.card'));

// 	const animation = () => {
// 		if (isDragging) requestAnimationFrame(animation);
// 		setSliderPosition();
// 	};

// 	let isDragging = false,
// 		startPos = 0,
// 		currentTranslate = 0,
// 		prevTranslate = 0,
// 		animationID = requestAnimationFrame(animation),
// 		currentIndex = 0;

// 	window.oncontextmenu = (event) => {
// 		event.preventDefault();
// 		event.stopPropagation();
// 		return false;
// 	};

// 	const getPositionX = (event) => {
// 		return event.type.includes('mouse')
// 			? event.pageX
// 			: event.touches[0].clientX;
// 	};

// 	const touchStart = (index) => {
// 		return (event) => {
// 			currentIndex = index;
// 			startPos = getPositionX(event);
// 			isDragging = true;

// 			animationID = requestAnimationFrame(animation);
// 		};
// 	};

// 	const touchMove = (event) => {
// 		if (isDragging) {
// 			const currentPosition = getPositionX(event);
// 			currentTranslate = prevTranslate + currentPosition - startPos;
// 		}
// 	};

// 	const touchEnd = () => {
// 		isDragging = false;
// 		cancelAnimationFrame(animationID);
// 	};

// 	const setSliderPosition = () => {
// 		slider.style.transform = `translateX(${currentTranslate}px)`;
// 	};

// 	slides.forEach((slide, index) => {
// 		slide.addEventListener('touchstart', touchStart(index));
// 		slide.addEventListener('touchend', touchEnd);
// 		slide.addEventListener('touchmove', touchMove);
// 	});
// };

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
