export const fetchHomePageData = async () =>{
    const data = await fetch("https://reddit.com/.json");
    const json = await data.json();
    return json;
}