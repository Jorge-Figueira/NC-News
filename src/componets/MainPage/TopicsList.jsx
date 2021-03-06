import { useEffect, useState } from "react";
import * as api from "../../api";
import { useNavigate } from "react-router-dom";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.fetchTopics().then((queriedTopics) => {
      setTopics(queriedTopics.map((topic) => topic.slug));
    });
  }, []);

  return topics.map((topic) => {
    return (
      <button
        className="topic-item black"
        key={topic}
        onClick={() => {
          navigate(`/topics/${topic}`);
          document.getElementById("topic-open").checked = false;
        }}
      >
        {topic}
      </button>
    );
  });
}
