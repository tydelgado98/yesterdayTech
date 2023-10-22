let newEl = document.getElementById("newsSection");
let articleContainer = document.getElementById("article-container");

// Parse the URL parameter to get the article data
const urlParams = new URLSearchParams(window.location.search);
const articleData = urlParams.get("url");

// Check if article data exists
if (articleData) {
  const article = JSON.parse(decodeURIComponent(articleData));

  // Display the article details on the page
  let articleTitle = document.createElement("h2");
  articleTitle.textContent = article.title;

  let articleDescription = document.createElement("p");
  articleDescription.textContent = article.description;

  let articleContent = document.createElement("p");
  articleContent.textContent = article.content;

  articleContainer.appendChild(articleTitle);
  articleContainer.appendChild(articleDescription);
  articleContainer.appendChild(articleContent);
} else {
  // Handle the case when no article data is provided
  articleContainer.textContent = "No article data found.";
}


