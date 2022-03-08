import * as api from "../api";
import ArticleCard from "./ArticleCard";
import {useState, useEffect} from 'react'


export default function ArticleList ({ topic, sort_by, order}) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        api.fetchArticles(topic, sort_by, order).then((queriedArticles) => {
            setArticles(queriedArticles)
            setLoading(false)
        })
        
    }, [])
    //Ammend ArticleList to work with input from the user and create the dropdown lists
    
    if(loading === true)return <p> Loading..</p>
    return ( <section>
                
                {articles.map(({article_id, title, topic,author, votes, comment_count}) => {
                    return   <ArticleCard  key = {article_id} title= {title} topic = {topic} author = {author} votes= {votes} comment_count = {comment_count} />
                })}
                
            </section>
        )
            
    
        
            
                
            
       
    
}