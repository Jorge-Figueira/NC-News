import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <>
        <button
          className="topic-item black"
          onClick={() => {
            navigate(`/topics/${topic}`);
          }}
        >
          {topic}
        </button>
      </>
    );
  });
}
