window.addEventListener("load", function(){
    // TODO: register the handler
    const searchButton = document.getElementById("search");
    searchButton.addEventListener("click", function(){
    const input = document.getElementById("q");
    console.log(input.value);
    const engine = document.querySelector("input[name=engine]:checked");
    console.log(engine.value);

    const actions = {
        "Google": "http://www.google.com/search",
        "DuckDuckGo": "https://www.duckduckgo.com/",
        "Bing": "https://www.bing.com/",
        "Lycos": "https://search.lycos.com/web/"
    }
    const searchForm = document.getElementById("searchForm");
    searchForm.setAttribute("action", actions[engine.value]);
    });
});