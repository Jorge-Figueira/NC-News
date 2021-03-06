import { useNavigate } from "react-router-dom";
import TopicsList from "../MainPage/TopicsList";
export default function Selector({ setSortBy, order, setOrder }) {
  const orderToSet = order === "asc" ? "desc" : "asc";
  const navigate = useNavigate();
  return (
    <section className="selectors">
      <nav className="topic">
        <input
          type="checkbox"
          href="#"
          className="topic-open"
          name="topic-open"
          id="topic-open"
        />
        <label className="topic-open-button" htmlFor="topic-open">
          <p>topics</p>
        </label>
        <button
          className="topic-item black"
          onClick={() => {
            navigate("/");
            document.getElementById("topic-open").checked = false;
          }}
        >
          All Topics
        </button>
        <TopicsList />
      </nav>
      <button
        className="Button"
        onClick={() => {
          setOrder(orderToSet);
        }}
      >
        {orderToSet}
      </button>
      <nav className="menu">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
          <p>sort_by</p>
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
    </section>
  );
}
