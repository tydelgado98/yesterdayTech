let newEl = document.getElementById("newsSection");
let articleContainer = document.getElementById("article-container");
let articleData = JSON.parse(decodeURIComponent(new URLSearchParams(window.location.search).get("url")));
let footer = document.getElementById("foot");





if (articleData) {

footer.style.position = "relative";



console.log(articleData);

  articleContainer.innerHTML = "";
  let articleAuthor = document.createElement("h6");
  articleAuthor.textContent = articleData.author;
  articleAuthor.setAttribute("class", "mb-1 mt-4");


  let articleTitle = document.createElement("h2");
  articleTitle.textContent = articleData.title;
  articleTitle.setAttribute("class", "mt-3");
  articleTitle.setAttribute("class", "mb-4 mt-2 border-bottom border-dark rounded");
  articleTitle.style.paddingBottom = "4rem";


  let articleDescription = document.createElement("h5");
  articleDescription.textContent = articleData.description;
  articleDescription.setAttribute("class", "mb-4")
  articleDescription.style.marginTop = "4.0rem";


  let articleContent = document.createElement("a");
  articleContent.textContent = articleData.content;
  articleContent.setAttribute("href", articleData.url);
  articleContent.style.color = "#555555"; 
  articleContent.style.fontStyle = "italic";
  articleContent.style.fontSize = "0.8rem";
  articleContent.style.textDecoration = "none";

  let articleImg = document.createElement("img");
  articleImg.setAttribute("src", articleData.urlToImage);
  articleImg.style = "width: 60%; display: block; margin: 4rem auto 2rem;";
  


  articleContainer.appendChild(articleAuthor);
  articleContainer.appendChild(articleTitle);
  articleContainer.appendChild(articleDescription);
  articleContainer.appendChild(articleContent);
  articleContainer.appendChild(articleImg);
 
} else {
  articleContainer.textContent = "No article data found.";
}




