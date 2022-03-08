import axios from 'axios';
const nc_news = axios.create({baseURL:"https://pretend-you-reddit.herokuapp.com/api"})

export function fetchArticles () {
    return nc_news.get("/articles").then((res) => {
        return res.data.articles;
    });
}

