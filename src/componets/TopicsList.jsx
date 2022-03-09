import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
 
  useEffect(() => {
    api.fetchTopics().then(( queriedTopics ) => {
         setTopics(queriedTopics.map((topic) => topic.slug))
     
    
    });
  }, []);
  

  return (
      
    topics.map((topic) => {

        return <Link key = {topic} className = 'topic_link' to= {`/topics/${topic}`}>{topic}</Link>
    })
   
  )
 
}