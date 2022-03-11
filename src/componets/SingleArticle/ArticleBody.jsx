import * as api from '../../api'
import {useState, useEffect} from 'react'


export default function  ArticleBody ({article}) {
    const [vote, setVote] = useState(0);
   const [like, setLike] = useState(false);
   const [dislike, setDislike] = useState(false);
   const [renderVote, setRenderVote] = useState(article.votes)

    useEffect(() => {
        const voteUpdate = {inc_votes: vote}
        setRenderVote((currentVote) => {return currentVote + vote})
        api.updateVotes(article.article_id, voteUpdate ).then((item) =>{
            
        })
    },[vote])

    
    return (
        <article className= "article__card">
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <section className = 'descriptors'>
                <p className = 'descriptor_item'>Topic: {article.topic}</p>
                <p className = 'descriptor_item'>Author: {article.author}</p>
                <p className = 'descriptor_item'>Votes: {renderVote}</p>
                <p className = 'descriptor_item'>Comments: {article.comment_count}</p>
                <p className = 'descriptor_item'>Date: {article.created_at.slice(0,10)}</p>
                 <button onClick={() => {
                    if (like === false)  {
                        if (dislike ===false) {
                            setVote(1);
                            setLike(true)
                        }else {
                            setVote(2);
                            setLike(true);
                            setDislike(false)
                        }
                    } else{
                        setVote(-1);
                        setLike(false)
                    }
                }}>Like</button>
                <button onClick={() => {
                    if (dislike === false) {
                        if (like === true) {
                            setVote(-2);
                            setLike(false);
                            setDislike(true)
                        } else {
                            setVote(-1);
                            setDislike(true)
                        }
                    } else {
                        setVote(1);
                        setDislike(false)
                    }
                }}>Dislike</button>
              
            </section>


        </article>
    )


}

