window.addEventListener("load", function(){
    // TODO: register the handler
    let searchButton = document.getElementById("search");
    searchButton.addEventListener("click", function(){
    let input = document.getElementById("q");
    console.log(input.value);
    let engine = document.querySelector("input[name=engine]:checked");
    console.log(engine.value);

    let actions = {
        "Google": "http://www.google.com/search",
        "DuckDuckGo": "https://www.duckduckgo.com/",
        "Bing": "https://www.bing.com/",
        "Lycos": "https://search.lycos.com/web/"
    }
    let searchForm = document.getElementById("searchForm");
    searchForm.setAttribute("action", actions[engine.value]);
    });
});