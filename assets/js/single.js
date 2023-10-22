let newEl = document.getElementById("newsSection");
let articleContainer = document.getElementById("article-container");




const articleData = JSON.parse(decodeURIComponent(new URLSearchParams(window.location.search).get("url")));

if (articleData) {
  let articleTitle = document.createElement("h2");
  articleTitle.textContent = articleData.title;

  let articleDescription = document.createElement("p");
  articleDescription.textContent = articleData.description;

  let articleContent = document.createElement("p");
  articleContent.textContent = articleData.content;

  articleContainer.appendChild(articleTitle);
  articleContainer.appendChild(articleDescription);
  articleContainer.appendChild(articleContent);
} else {
  articleContainer.textContent = "No article data found.";
}


