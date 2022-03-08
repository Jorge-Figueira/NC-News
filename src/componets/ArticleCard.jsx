export default function  ArticleCard ({title, topic,  author,  votes, comment_count} ) {
    
        return (
            <article className = "article__card">
        <h3>{title}</h3>
        <section className = 'descriptors'>
        <p className = 'descriptor_item'>Topic: {topic}</p>
        <p className = 'descriptor_item'>Author: {author}</p>
        <p className = 'descriptor_item'>Votes: {votes}</p>
        <p className = 'descriptor_item'>Comments: {comment_count}</p>
        </section>
      </article>
        )
}