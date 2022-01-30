
// // Initialize the news api parameters
// let apiKey = 'b12db959da8f46bd82924af223936e38'

// // Grab the news container
// let newsAccordion = document.getElementById('newsAccordion');

// // Create an ajax get request
// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`,true);

// // What to do when response is ready
// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         let articles = json.articles;
//         let newsHtml = "";
//         articles.forEach(function (element, index) {
//             let news = `<div class="card">
//                             <h2 class="mb-0">
//                             </h2>
//                             <div id="${index}" class="" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//                             <div class=""> . ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
//                             </div>
//                             </div>`;
//             newsHtml += news;
//         });
//         newsAccordion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some error occured")
//     }
// }
// xhr.send()
