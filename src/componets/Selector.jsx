import { Link } from 'react-router-dom'
export default function Selector ({setSortBy, sortBy, order, setOrder}) {
    const orderToSet = order === 'asc'? 'desc': 'asc';
    return (
        <section className= 'selectors'>
         <Link className = 'topic_link' to= "/">All</Link>
         <Link className = 'topic_link' to= "/topics/cooking">cooking</Link>
         <Link className = 'topic_link' to= "/topics/football">football</Link>
         <Link className = 'topic_link' to= "/topics/coding">coding</Link>
       
       
        <select name="sort_by" id="sort_by" onClick= {(e) => {setSortBy(e.target.value)}}>
                <option value="created_at">date</option>
                <option value="title">title</option>
                <option value="topic">topic</option>
                <option value="author">author</option>
               
                <option value="votes">votes</option>
                {/* <option value="comment_count">comments</option>  <<<<<<<This option needs work on the back end as comment_count does not seem to be valid for the url*/}
                
                {/* <TopicsList/> */}
                {/* <option value="Electronics">Electronics </option>
                <option value="Household">Household</option>
                <option value="Clothing">Clothing</option> */}
        </select>
        <button onClick= {() => {setOrder(orderToSet)}}>{orderToSet}</button>

        </section>   
    )
}