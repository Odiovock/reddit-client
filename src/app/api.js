export const fetchHomePageData = async () =>{
    const data = await fetch("https://api.reddit.com/.json?raw_json=1");
    const json = await data.json();
    return json;
}

export const fetchArticleData = async (articlePermaLink) => {
    const data = await fetch(`https://api.reddit.com/${articlePermaLink}/.json?raw_json=1`);
    const json = await data.json();
    return json;
}

export const fetchSearchData = async (searchKeyWord) => {
    const data = await fetch(`https://api.reddit.com/search/.json?raw_json=1&q=${searchKeyWord}`);
    const json = await data.json()
    return json;
}

export const fetchFilteredData = async (searchFilter) => {
    const data = await fetch();
    const json = await data.json();
    return json;
}