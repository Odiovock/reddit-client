export const fetchHomePageData = async () =>{
    const data = await fetch("https://api.reddit.com/.json");
    const json = await data.json();
    return json;
}