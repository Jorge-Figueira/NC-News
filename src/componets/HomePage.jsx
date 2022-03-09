import ArticleList from "./ArticleList";
import Selector from "./Selector";
import { useParams } from "react-router-dom";
import { useState } from "react";

//create a toguel switch to change order from ascending to descending

export default function HomePage () {
    const [sortby, setSortBy] = useState(undefined)
    const [order, setOrder] = useState('desc')
    
   const {topic} =  useParams()
   
    return (
        <>
        <Selector sortby= {sortby} setSortBy= {setSortBy} order= {order} setOrder = {setOrder} />
        <ArticleList  topic = {topic} sortby= {sortby} order = {order}/>
        </>
    )
}