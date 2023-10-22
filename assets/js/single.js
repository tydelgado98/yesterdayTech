let newEl = document.getElementById("newsSection");
let articleContainer = document.getElementById("article-container");

let articleData = JSON.parse(decodeURIComponent(new URLSearchParams(window.location.search).get("url")));

if (articleData) {

console.log(articleData);

  articleContainer.innerHTML = "";
  let articleTitle = document.createElement("h3");
  articleTitle.textContent = articleData.title;
  articleTitle.setAttribute("class", "mt-4");

  let articleDescription = document.createElement("p");
  articleDescription.textContent = articleData.description;
  articleDescription.setAttribute("class", "mb-5 mt-3")

  let articleContent = document.createElement("a");
  articleContent.textContent = articleData.content;
  articleContent.setAttribute("href", articleData.url);



  articleContainer.appendChild(articleTitle);
  articleContainer.appendChild(articleDescription);
  articleContainer.appendChild(articleContent);
} else {
  articleContainer.textContent = "No article data found.";
}




