import { useNavigate } from "react-router-dom";
export default function  ArticleCard ({title, topic,  author,  votes, comment_count, date, article_id} ) {
  const navigate = useNavigate()
    const usefulDate = date.slice(0,10);
        return (
            <article className = "article__card"onClick= {() => {navigate(`/articles/${article_id}`)}} >
        <h3 >{title}</h3>
        <section className = 'descriptors'>
          <p className = 'descriptor_item'>Topic: {topic}</p>
          <p className = 'descriptor_item'>Author: {author}</p>
          <p className = 'descriptor_item'>Votes: {votes}</p>
          <p className = 'descriptor_item'>Comments: {comment_count}</p>
          <p className = 'descriptor_item'>Date: {usefulDate}</p>
        </section>
      </article>
        )
}