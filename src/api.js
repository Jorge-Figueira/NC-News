import axios from "axios";
const nc_news = axios.create({
  baseURL: "https://pretend-you-reddit.herokuapp.com/api",
});

export function fetchArticles(topic, sortby, order) {
  const params = {};
  if (topic !== "All") params.topic = topic;
  params.sort_by = sortby;
  params.order = order;

  return nc_news.get("/articles", { params }).then((res) => {
    return res.data.articles;
  });
}

export function fetchTopics() {
  return nc_news.get("/topics").then((res) => {
    return res.data.topics;
  });
}

export function fetchArticleById(article_id) {
  return nc_news.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
}

export function fetchCommentsByArticle(article_id) {
  return nc_news.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
}

export function updateVotes(article_id, voteUpdate) {
  return nc_news
    .patch(`/articles/${article_id}`, voteUpdate)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
}

export function checkUsers() {
  return nc_news.get("/users").then((res) => {
    return res.data.users;
  });
}

export function postComment(params, article_id) {
  console.log(params, "params in api");
  console.log(article_id, "<<<<article_id");
  return nc_news
    .post(`/articles/${article_id}/comments`, params)
    .then((res) => {
      console.log(res, "<<<<<res in api");
      return null;
    });
}
