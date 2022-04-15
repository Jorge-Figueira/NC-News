import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleBody from "./ArticleBody";
import CommentsList from "./CommentsList";
import * as api from "../../api";
import CommentBox from "../CommentBox/CommentBox";
import { useNavigate } from "react-router-dom";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    api.fetchArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading((isLoading) => (isLoading += 1));
    });
    api.fetchCommentsByArticle(article_id).then((queriedComments) => {
      setComments(queriedComments);
      setIsLoading((isLoading) => (isLoading += 1));
    });
  }, [article_id]);

  if (isLoading < 2) return <p>....loading</p>;
  return (
    <section>
      <button
        className="Button"
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <ArticleBody article={article} />
      <CommentBox article_id={article_id} />
      <CommentsList comments={comments} />
    </section>
  );
}
