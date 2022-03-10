import * as api from "../api";
import ArticleCard from "./ArticleCard";
import {useState, useEffect} from 'react'



// export default function ArticleList ({ chosenTopic, sort_by, order}) {
    export default function ArticleList ({topic, sortby, order}) {
    const [articles, setArticles] = useState([])
   
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        api.fetchArticles(topic, sortby, order).then((queriedArticles) => {
            setArticles(queriedArticles)
            setLoading(false)
        })
        
    }, [topic, sortby, order])
    
    if(loading === true)return <p> Loading..</p>
    return ( <section>
                
                {articles.map(({article_id, title, topic,author, votes, comment_count, created_at}) => {
                    return   <ArticleCard  key = {article_id} article_id = {article_id} title= {title} topic = {topic} author = {author} votes= {votes} comment_count = {comment_count} date = {created_at}/>
                })}
                
            </section>
        )
            
    
        
            
                
            
       
    
}