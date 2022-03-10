import * as api from '../api'
import {useState, useEffect} from 'react'


export default function  ArticleBody ({article}) {
    
//    return null
    return (
        <article className= "article__card">
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <section className = 'descriptors'>
                <p className = 'descriptor_item'>Topic: {article.topic}</p>
                <p className = 'descriptor_item'>Author: {article.author}</p>
                <p className = 'descriptor_item'>Votes: {article.votes}</p>
                <p className = 'descriptor_item'>Comments: {article.comment_count}</p>
                <p className = 'descriptor_item'>Date: {article.created_at.slice(0,10)}</p>
            </section>


        </article>
    )


}

