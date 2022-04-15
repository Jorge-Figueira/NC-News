import { useNavigate } from "react-router-dom";

export default function ArticleCard({
  title,
  topic,
  author,
  votes,
  comment_count,
  date,
  article_id,
}) {
  const navigate = useNavigate();
  const usefulDate = date.slice(0, 10);
  return (
    <article
      className="article__card"
      onClick={() => {
        navigate(`/articles/${article_id}`);
      }}
    >
      <h3>{title}</h3>

      <section className="descriptors">
        {" "}
        <p className="descriptor_item">
          Author: <br />
          {author}
        </p>
        <p className="descriptor_item">
          Topic: <br />
          {topic}
        </p>
        <p className="descriptor_item">
          Votes: <br />
          {votes}
        </p>
        <p className="descriptor_item">
          Comments: <br />
          {comment_count}
        </p>
        <p className="descriptor_item">
          Date: <br />
          {usefulDate}
        </p>
      </section>
    </article>
  );
}
