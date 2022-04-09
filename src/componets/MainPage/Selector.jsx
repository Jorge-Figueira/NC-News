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

      <nav className="menu">
        <input
          type="checkbox"
          href="#"
          class="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label class="menu-open-button" for="menu-open">
          <p>sort_by</p>
          {/* <span class="lines line-1"></span>
          <span class="lines line-2"></span>
          <span class="lines line-3"></span> */}
        </label>
        <button
          className="menu-item black"
          onClick={() => {
            setSortBy("created_at");
            document.getElementById("menu-open").checked = false;
          }}
        >
          date
        </button>
        <button
          className="menu-item black"
          onClick={() => {
            setSortBy("title");
            document.getElementById("menu-open").checked = false;
          }}
        >
          title
        </button>
        <button
          className="menu-item black"
          onClick={() => {
            setSortBy("topic");
            document.getElementById("menu-open").checked = false;
          }}
        >
          topic
        </button>
        <button
          className="menu-item black"
          onClick={() => {
            setSortBy("author");
            document.getElementById("menu-open").checked = false;
          }}
        >
          author
        </button>
        <button
          className="menu-item black"
          onClick={() => {
            setSortBy("votes");
            document.getElementById("menu-open").checked = false;
          }}
        >
          votes
        </button>
        <button
          className="menu-item black"
          onClick={() => {
            setSortBy("comment_count");
            document.getElementById("menu-open").checked = false;
          }}
        >
          comments
        </button>
      </nav>

      {/* <select
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
      </select> */}
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
