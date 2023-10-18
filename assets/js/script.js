let title = document.getElementById("title");
let category = document.getElementById("category");
let categoryForm = document.getElementById("Category-form");

let APIKey = "ef1373e5392446349319b79d71c36c49";










let formSubmit = function (event) {
    event.preventDefault();
    let categoryName = category.value;
    console.log(categoryName);
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