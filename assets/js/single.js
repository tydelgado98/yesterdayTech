let newEl = document.getElementById("newsSection");

let getSingleNews = function () {
    let queryString = document.location.search;
    let category = queryString.split("=")[1];
    console.log(category);

    if (category) {
        getNews(category);
    } else {
        document.location.replace("./index.html");
    }
}


