import ArticleList from "./ArticleList";
import { useState } from "react";
import Selector from "./Selector";
import { useState, useEffect } from "react";

export default function HomePage () {
    [chosenTopic, setChosenTopic] = useState('All')
    
    return (
        <>
        <Selector chosenTopic = {chosenTopic} setChosenTopic = {setChosenTopic}/>
        <ArticleList />
        </>
    )
}