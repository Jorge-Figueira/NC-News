import { Link } from "react-router-dom";
import TopicsList from "../MainPage/TopicsList";
export default function Selector({ setSortBy, sortBy, order, setOrder }) {
  const orderToSet = order === "asc" ? "desc" : "asc";
  return (
    <section className="selectors">
      <Link className="topic_link" to="/">
        All
      </Link>
      <TopicsList />

      <select
        name="sort_by"
        id="sort_by"
        onClick={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option value="created_at">date</option>
        <option value="title">title</option>
        <option value="topic">topic</option>
        <option value="author">author</option>

        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>
      <button
        onClick={() => {
          setOrder(orderToSet);
        }}
      >
        {orderToSet}
      </button>
    </section>
  );
}
