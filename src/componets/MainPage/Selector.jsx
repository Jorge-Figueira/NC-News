import { Link, useNavigate } from "react-router-dom";
import TopicsList from "../MainPage/TopicsList";
export default function Selector({ setSortBy, sortBy, order, setOrder }) {
  const orderToSet = order === "asc" ? "desc" : "asc";
  const navigate = useNavigate();
  return (
    <section className="selectors">
      <button
        className="Button"
        onClick={() => {
          navigate("/");
        }}
      >
        All Topics
      </button>

      <TopicsList />

      <select
        name="sort_by"
        id="sort_by"
        onClick={(e) => {
          setSortBy(e.target.value);
        }}
      >
        <option className="sort_by_content" value="created_at">
          date
        </option>
        <option className="sort_by_content" value="title">
          title
        </option>
        <option className="sort_by_content" value="topic">
          topic
        </option>
        <option className="sort_by_content" value="author">
          author
        </option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>
      <button
        className="Button"
        onClick={() => {
          setOrder(orderToSet);
        }}
      >
        {orderToSet}
      </button>
    </section>
  );
}
