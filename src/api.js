import axios from 'axios';
const nc_news = axios.create({baseURL:"https://pretend-you-reddit.herokuapp.com/api"})

export function fetchArticles (topic, sortby, order) {
    const params = {};
    if (topic !== 'All') params.topic = topic;
    params.sort_by = sortby;
    params.order = order

    return nc_news.get("/articles", {params}).then((res) => {
        return res.data.articles;
    });
}

export function fetchTopics () {
    return nc_news.get("/topics").then((res) => {
        console.log(res.data.topics, "<<<<topics at fetchTopics")
        return res.data.topics;
    })
}