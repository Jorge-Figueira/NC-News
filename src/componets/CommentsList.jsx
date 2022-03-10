

export default function CommentsList ({comments}) {
return (
    <section className= "comments_list">
    {comments.map((comment) =>{
        return ( 
            <article key = {comment.comment_id} className = "comment__card">
                <p>{comment.body} </p>
                <section className = 'descriptors'>
                    <p className = 'descriptor_item'>Author: {comment.author}</p>
                    <p className = 'descriptor_item'>Votes: {comment.votes}</p>
                    <p className = 'descriptor_item'>Date: {comment.created_at.slice(0,10)}</p> 
                </section>
            </article>
        )   
    })}

    </section>
)   
}