import { useEffect, useState } from "react";
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

        return <option key = {topic} value= {topic}>{topic}</option>
    })
   
  )
 
}