let title = document.getElementById("title");
let category = document.getElementById("category");
let categoryForm = document.getElementById("Category-form");
let categorySearch = document.getElementById("newsSection");
let footer = document.getElementById("foot");

let APIKey = "ef1373e5392446349319b79d71c36c49";






let formSubmit = function (event) {
    event.preventDefault();
    let categoryName = category.value;
    console.log(categoryName);

    if (categoryName) {
        getCategory(categoryName);
    } else {
        alert("Please enter a category");
    }
};

let getCategory = function (category) {

    let queryURL = "https://newsapi.org/v2/top-headlines?country=us&category=" + category + "&apiKey=" + APIKey;
    fetch(queryURL)
    .then(function (res){
        if (res.ok) {
            console.log(res);
            res.json().then(function (data) {
                console.log(data);
                category = category.charAt(0).toUpperCase() + category.slice(1)
                categorySearch.innerHTML = `<h2>${category}</h2>`;
                footer.style.position = "relative";
                displayCategory(data, category);
            });
        } else {
            alert("Error: " + res.statusText);
            console.log(res.statusText);
        }
    }
    )};

let displayCategory = function (data, searchTerm) {
    for (let i = 0; i < Math.min(data.articles.length, 6); i++) {

    //    articleTitle = document.createElement("a");
    //     articleTitle.href = data.articles[i].url;
        let articleAuthor = document.createElement("h6");
        articleAuthor.textContent = data.articles[i].author;
        articleAuthor.setAttribute("class", "mb-2 mt-2");
        articleAuthor.style.fontStyle = "italic"

        let articleSource = document.createElement("h4");
        articleSource.textContent = data.articles[i].source.name;
        articleSource.setAttribute("class", "mb-5");
        articleSource.style.fontStyle = "italic"

    let articleTitle = document.createElement("a");
    articleTitle.textContent = data.articles[i].title;
    articleTitle.setAttribute("class", "mb-4 mt-3");
    // Encode the article data as JSON and add it to the URL as a query parameter
    articleTitle.setAttribute("href", `./news.html?url=${encodeURIComponent(JSON.stringify(data.articles[i]))}`);
    articleTitle.style.textDecoration = "none";
    
    
       
        

        // let articleDesc = document.createElement("h6");
        // articleDesc.textContent = data.articles[i].description;
        // articleDesc.setAttribute("class", "mb-5 mt-2")



        let articleContainer = document.createElement("div");
        articleContainer.appendChild(articleSource);
        articleContainer.appendChild(articleAuthor);
        articleContainer.appendChild(articleTitle);
      
        articleContainer.setAttribute("class", "mb-5 mt-5 border border-dark rounded");
        articleContainer.style.padding = "4.0rem";
        articleContainer.style.paddingTop = "1.5rem";
        
        
        // articleContainer.appendChild(articleDesc);
        

       
       categorySearch.append(articleContainer); // Append the link to the DOM
    }
}

categoryForm.addEventListener("submit", formSubmit);








//  The category you want to get headlines for. Possible options: business entertainment
// generalhealth science sports technology. Note: you can't mix this param with the sources param.

// The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options: ae ar at au be bg 
// br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr 
// lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th 
// tr tw ua us ve za. Note: you can't mix this param with the sources param.

// GET https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ef1373e5392446349319b79d71c36c49

// GET https://newsapi.org/v2/top-headlines?country=us&apiKey=ef1373e5392446349319b79d71c36c49

// GET https://newsapi.org/v2/top-headlines?q=trump&apiKey=ef1373e5392446349319b79d71c36c49  Headline with Trump in it

// that is the api call for the bbc news and its using my actual api key