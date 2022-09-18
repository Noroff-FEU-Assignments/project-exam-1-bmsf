// const gridContainer = document.querySelector('.grid-container');

// const callApi = async () => {
// 	const response = await fetch(url);
// 	const results = await response.json();
// 	createCards(results);
// };

// callApi();

// const createCards = (results) => {
// 	console.log(results);

// 	results.forEach((post) => {
// 		gridContainer.innerHTML += `
//         <a class='card flex_col' href='./article.html?id=${post.id}'>
//         <img src='${post._embedded['wp:featuredmedia']['0'].source_url}' class='author-image'/>
//         <p class='post-header'>${post.title.rendered}</p>
//         <div class='author-container flex'>
//             <div class='author-text-container'>
//                 <p class='author'>${post.author}</p>
//                 <p class='time'>${post.date}</p>
//             </div>
//         </div>
//     </a>
//         `;
// 	});
// };
