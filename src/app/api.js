export const fetchHomePageData = async () =>{
    const data = await fetch("https://api.reddit.com/.json?raw_json=1");
    const json = await data.json();
    return json;
}