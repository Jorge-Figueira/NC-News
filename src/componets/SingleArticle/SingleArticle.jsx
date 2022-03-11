import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleBody from "./ArticleBody";
import CommentsList from "./CommentsList"
import * as api from "../../api"


export default function SingleArticle () {
    const {article_id} = useParams()
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(0)
    useEffect(() => {
        
        api.fetchArticleById(article_id).then((article) => {
        setArticle(article)
        setIsLoading((isLoading) =>isLoading += 1)
          })
        api.fetchCommentsByArticle(article_id).then((queriedComments) => {
            setComments(queriedComments)
            setIsLoading((isLoading) => isLoading += 1)
        })
        
      
        
    },[])

    if (isLoading < 2) return <p>....loading</p>
    return (
        //<SingleArtNav />
        <section>
            <Link className = 'Home_Link' to= "/">Home</Link>
            <ArticleBody article = {article}/> 
            <CommentsList comments = {comments}/>
        </section>
    )    
}